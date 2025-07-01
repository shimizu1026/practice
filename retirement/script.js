
let requests = [];
let requestIdCounter = 1;

// フォーム要素の取得
const form = document.getElementById('leaveForm');
const leaveType = document.getElementById('leaveType');
const durationGroup = document.getElementById('durationGroup');
const requestList = document.getElementById('requestList');

// 休暇種別変更時の処理
leaveType.addEventListener('change', function() {
	if (this.value === 'early_leave' || this.value === 'hours') {
		durationGroup.style.display = 'block';
		document.getElementById('startTime').required = true;
		document.getElementById('endTime').required = true;
	} else {
		durationGroup.style.display = 'none';
		document.getElementById('startTime').required = false;
		document.getElementById('endTime').required = false;
	}
});

// 日付の初期値設定（今日以降のみ選択可能）
document.getElementById('leaveDate').min = new Date().toISOString().split('T')[0];

// フォーム送信処理
form.addEventListener('submit', function(e) {
	e.preventDefault();
	
	const formData = {
		id: requestIdCounter++,
		employeeName: document.getElementById('employeeName').value,
		leaveDate: document.getElementById('leaveDate').value,
		leaveType: document.getElementById('leaveType').value,
		startTime: document.getElementById('startTime').value,
		endTime: document.getElementById('endTime').value,
		reason: document.getElementById('reason').value,
		submitDate: new Date().toISOString().split('T')[0],
		approvals: {
			supervisor: { status: 'pending', approver: '上長' },
			president: { status: 'pending', approver: '社長' },
			accounting: { status: 'pending', approver: '経理' }
		}
	};

	requests.unshift(formData);
	updateRequestList();
	form.reset();
	durationGroup.style.display = 'none';
	
	// メール送信シミュレーション
	sendNotificationEmails(formData);
	showNotification('申請が提出されました。関係者にメール通知を送信しました。', 'success');
});

// 申請一覧の更新
function updateRequestList() {
	if (requests.length === 0) {
		requestList.innerHTML = `
			<div class="empty-state">
				<div>📋</div>
				<p>申請はまだありません</p>
			</div>
		`;
		return;
	}

	requestList.innerHTML = requests.map(request => {
		const status = getOverallStatus(request.approvals);
		const typeText = getLeaveTypeText(request.leaveType);
		const durationText = getDurationText(request);
		
		return `
			<div class="request-item">
				<div class="request-header">
					<div class="request-name">${request.employeeName}</div>
					<div class="request-date">${formatDate(request.leaveDate)}</div>
				</div>
				<div class="request-details">
					<strong>${typeText}</strong> ${durationText}<br>
					<small>申請日: ${formatDate(request.submitDate)}</small>
					${request.reason ? `<br><small>理由: ${request.reason}</small>` : ''}
				</div>
				<div class="approval-section">
					${Object.entries(request.approvals).map(([key, approval]) => `
						<div class="approval-item ${approval.status === 'pending' ? 'approval-pending' : 'approval-approved'}">
							${approval.approver}<br>
							${approval.status === 'pending' ? 
								`<button class="approval-btn" onclick="approve(${request.id}, '${key}')">承認</button>` : 
								'✓ 承認済'
							}
						</div>
					`).join('')}
				</div>
			</div>
		`;
	}).join('');
}

// 承認処理
function approve(requestId, approvalType) {
	const request = requests.find(r => r.id === requestId);
	if (request) {
		request.approvals[approvalType].status = 'approved';
		request.approvals[approvalType].approvedDate = new Date().toISOString().split('T')[0];
		
		updateRequestList();
		
		const approverName = request.approvals[approvalType].approver;
		showNotification(`${approverName}による承認が完了しました。`, 'success');
		
		// 全ての承認が完了した場合
		if (Object.values(request.approvals).every(a => a.status === 'approved')) {
			setTimeout(() => {
				showNotification('全ての承認が完了しました！申請処理が終了しました。', 'success');
			}, 1000);
		}
	}
}

// ヘルパー関数
function getLeaveTypeText(type) {
	const types = {
		'early_leave': '早退',
		'half_day': '半日休暇',
		'full_day': '全日休暇',
		'hours': '時間休暇'
	};
	return types[type] || type;
}

function getDurationText(request) {
	if (request.leaveType === 'early_leave' || request.leaveType === 'hours') {
		if (request.startTime && request.endTime) {
			return `(${request.startTime} 〜 ${request.endTime})`;
		}
	}
	return '';
}

function getOverallStatus(approvals) {
	const values = Object.values(approvals);
	if (values.every(a => a.status === 'approved')) return 'approved';
	if (values.some(a => a.status === 'approved')) return 'partial';
	return 'pending';
}

function formatDate(dateString) {
	const date = new Date(dateString);
	return date.toLocaleDateString('ja-JP', { 
		year: 'numeric', 
		month: 'long', 
		day: 'numeric',
		weekday: 'short'
	});
}

function sendNotificationEmails(request) {
	// 実際のシステムではここでメール送信APIを呼び出し
	console.log('メール通知送信:');
	console.log('- 上長: supervisor@company.com');
	console.log('- 社長: president@company.com');
	console.log('- 経理: accounting@company.com');
	console.log('申請内容:', request);
}

function showNotification(message, type = 'success') {
	const notification = document.getElementById('notification');
	notification.textContent = message;
	notification.className = `notification ${type}`;
	notification.classList.add('show');
	
	setTimeout(() => {
		notification.classList.remove('show');
	}, 3000);
}

// サンプルデータの追加（デモ用）
function addSampleData() {
	const sampleRequest = {
		id: requestIdCounter++,
		employeeName: '田中花子',
		leaveDate: '2025-07-03',
		leaveType: 'early_leave',
		startTime: '15:00',
		endTime: '17:30',
		reason: '病院受診のため',
		submitDate: '2025-07-01',
		approvals: {
			supervisor: { status: 'approved', approver: '上長', approvedDate: '2025-07-01' },
			president: { status: 'pending', approver: '社長' },
			accounting: { status: 'pending', approver: '経理' }
		}
	};
	requests.push(sampleRequest);
	updateRequestList();
}

// ページ読み込み時にサンプルデータを追加
addSampleData();