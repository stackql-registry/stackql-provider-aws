--- 
title: pull_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - pull_requests
  - codecommit
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>pull_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pull_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.pull_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pull_request"
    values={[
        { label: 'get_pull_request', value: 'get_pull_request' },
        { label: 'list_pull_requests', value: 'list_pull_requests' }
    ]}
>
<TabItem value="get_pull_request">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="approvalRules" /></td>
    <td><code>array</code></td>
    <td>The approval rules applied to the pull request.</td>
</tr>
<tr>
    <td><CopyableCode code="authorArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who created the pull request.</td>
</tr>
<tr>
    <td><CopyableCode code="clientRequestToken" /></td>
    <td><code>string</code></td>
    <td>A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token.</td>
</tr>
<tr>
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the pull request was originally created, in timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The user-defined description of the pull request. This description can be used to clarify what should be reviewed and other details of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="lastActivityDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The day and time of the last user or system activity on the pull request, in timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="pullRequestId" /></td>
    <td><code>string</code></td>
    <td>The system-generated ID of the pull request.</td>
</tr>
<tr>
    <td><CopyableCode code="pullRequestStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the pull request. Pull request status can only change from OPEN to CLOSED. (OPEN, CLOSED)</td>
</tr>
<tr>
    <td><CopyableCode code="pullRequestTargets" /></td>
    <td><code>array</code></td>
    <td>The targets of the pull request, including the source branch and destination branch for the pull request.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>The system-generated revision ID for the pull request.</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The user-defined title of the pull request. This title is displayed in the list of pull requests to other repository users.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_pull_requests">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="pull_request_id" /></td>
    <td><code>string</code></td>
    <td>The system-generated IDs of the pull requests.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_pull_request"><CopyableCode code="get_pull_request" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a pull request in a specified repository.</td>
</tr>
<tr>
    <td><a href="#list_pull_requests"><CopyableCode code="list_pull_requests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.</td>
</tr>
<tr>
    <td><a href="#create_pull_request_approval_rule"><CopyableCode code="create_pull_request_approval_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pullRequestId"><code>pullRequestId</code></a>, <a href="#parameter-approvalRuleName"><code>approvalRuleName</code></a>, <a href="#parameter-approvalRuleContent"><code>approvalRuleContent</code></a></td>
    <td></td>
    <td>Creates an approval rule for a pull request.</td>
</tr>
<tr>
    <td><a href="#create_pull_request"><CopyableCode code="create_pull_request" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-title"><code>title</code></a>, <a href="#parameter-targets"><code>targets</code></a></td>
    <td></td>
    <td>Creates a pull request in the specified repository.</td>
</tr>
<tr>
    <td><a href="#update_pull_request_approval_rule_content"><CopyableCode code="update_pull_request_approval_rule_content" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pullRequestId"><code>pullRequestId</code></a>, <a href="#parameter-approvalRuleName"><code>approvalRuleName</code></a>, <a href="#parameter-newRuleContent"><code>newRuleContent</code></a></td>
    <td></td>
    <td>Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and the approval pool for approvers.</td>
</tr>
<tr>
    <td><a href="#update_pull_request_description"><CopyableCode code="update_pull_request_description" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pullRequestId"><code>pullRequestId</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td></td>
    <td>Replaces the contents of the description of a pull request.</td>
</tr>
<tr>
    <td><a href="#update_pull_request_status"><CopyableCode code="update_pull_request_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pullRequestId"><code>pullRequestId</code></a>, <a href="#parameter-pullRequestStatus"><code>pullRequestStatus</code></a></td>
    <td></td>
    <td>Updates the status of a pull request.</td>
</tr>
<tr>
    <td><a href="#update_pull_request_title"><CopyableCode code="update_pull_request_title" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pullRequestId"><code>pullRequestId</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Replaces the title of a pull request.</td>
</tr>
<tr>
    <td><a href="#delete_pull_request_approval_rule"><CopyableCode code="delete_pull_request_approval_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the pull request was created. You cannot delete an approval rule from a merged or closed pull request.</td>
</tr>
<tr>
    <td><a href="#evaluate_pull_request_approval_rules"><CopyableCode code="evaluate_pull_request_approval_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pullRequestId"><code>pullRequestId</code></a>, <a href="#parameter-revisionId"><code>revisionId</code></a></td>
    <td></td>
    <td>Evaluates whether a pull request has met all the conditions specified in its associated approval rules.</td>
</tr>
<tr>
    <td><a href="#merge_pull_request_by_fast_forward"><CopyableCode code="merge_pull_request_by_fast_forward" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pullRequestId"><code>pullRequestId</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a></td>
    <td></td>
    <td>Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.</td>
</tr>
<tr>
    <td><a href="#merge_pull_request_by_squash"><CopyableCode code="merge_pull_request_by_squash" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pullRequestId"><code>pullRequestId</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a></td>
    <td></td>
    <td>Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.</td>
</tr>
<tr>
    <td><a href="#merge_pull_request_by_three_way"><CopyableCode code="merge_pull_request_by_three_way" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pullRequestId"><code>pullRequestId</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a></td>
    <td></td>
    <td>Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.</td>
</tr>
<tr>
    <td><a href="#override_pull_request_approval_rules"><CopyableCode code="override_pull_request_approval_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pullRequestId"><code>pullRequestId</code></a>, <a href="#parameter-revisionId"><code>revisionId</code></a>, <a href="#parameter-overrideStatus"><code>overrideStatus</code></a></td>
    <td></td>
    <td>Sets aside (overrides) all approval rule requirements for a specified pull request.</td>
</tr>
<tr>
    <td><a href="#post_comment_for_pull_request"><CopyableCode code="post_comment_for_pull_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pullRequestId"><code>pullRequestId</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-beforeCommitId"><code>beforeCommitId</code></a>, <a href="#parameter-afterCommitId"><code>afterCommitId</code></a>, <a href="#parameter-content"><code>content</code></a></td>
    <td></td>
    <td>Posts a comment on a pull request.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_pull_request"
    values={[
        { label: 'get_pull_request', value: 'get_pull_request' },
        { label: 'list_pull_requests', value: 'list_pull_requests' }
    ]}
>
<TabItem value="get_pull_request">

Gets information about a pull request in a specified repository.

```sql
SELECT
approvalRules,
authorArn,
clientRequestToken,
creationDate,
description,
lastActivityDate,
pullRequestId,
pullRequestStatus,
pullRequestTargets,
revisionId,
title_
FROM aws.codecommit.pull_requests
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_pull_requests">

Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.

```sql
SELECT
pull_request_id
FROM aws.codecommit.pull_requests
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_pull_request_approval_rule"
    values={[
        { label: 'create_pull_request_approval_rule', value: 'create_pull_request_approval_rule' },
        { label: 'create_pull_request', value: 'create_pull_request' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_pull_request_approval_rule">

Creates an approval rule for a pull request.

```sql
INSERT INTO aws.codecommit.pull_requests (
pullRequestId,
approvalRuleName,
approvalRuleContent,
region
)
SELECT 
'{{ pullRequestId }}' /* required */,
'{{ approvalRuleName }}' /* required */,
'{{ approvalRuleContent }}' /* required */,
'{{ region }}'
RETURNING
approvalRule
;
```
</TabItem>
<TabItem value="create_pull_request">

Creates a pull request in the specified repository.

```sql
INSERT INTO aws.codecommit.pull_requests (
title,
description,
targets,
clientRequestToken,
region
)
SELECT 
'{{ title }}' /* required */,
'{{ description }}',
'{{ targets }}' /* required */,
'{{ clientRequestToken }}',
'{{ region }}'
RETURNING
pullRequest
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: pull_requests
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the pull_requests resource.
    - name: pullRequestId
      value: "{{ pullRequestId }}"
      description: |
        The system-generated ID of the pull request for which you want to create the approval rule.
    - name: approvalRuleName
      value: "{{ approvalRuleName }}"
      description: |
        The name for the approval rule.
    - name: approvalRuleContent
      value: "{{ approvalRuleContent }}"
      description: |
        The content of the approval rule, including the number of approvals needed and the structure of an approval pool defined for approvals, if any. For more information about approval pools, see the CodeCommit User Guide. When you create the content of the approval rule, you can specify approvers in an approval pool in one of two ways: CodeCommitApprovers: This option only requires an Amazon Web Services account and a resource. It can be used for both IAM users and federated access users whose name matches the provided resource name. This is a very powerful option that offers a great deal of flexibility. For example, if you specify the Amazon Web Services account 123456789012 and Mary_Major, all of the following would be counted as approvals coming from that user: An IAM user in the account (arn:aws:iam::123456789012:user/Mary_Major) A federated user identified in IAM as Mary_Major (arn:aws:sts::123456789012:federated-user/Mary_Major) This option does not recognize an active session of someone assuming the role of CodeCommitReview with a role session name of Mary_Major (arn:aws:sts::123456789012:assumed-role/CodeCommitReview/Mary_Major) unless you include a wildcard (*Mary_Major). Fully qualified ARN: This option allows you to specify the fully qualified Amazon Resource Name (ARN) of the IAM user or role. For more information about IAM ARNs, wildcards, and formats, see IAM Identifiers in the IAM User Guide.
    - name: title
      value: "{{ title }}"
      description: |
        The title of the pull request. This title is used to identify the pull request to other users in the repository.
    - name: description
      value: "{{ description }}"
      description: |
        A description of the pull request.
    - name: targets
      description: |
        The targets for the pull request, including the source of the code to be reviewed (the source branch) and the destination where the creator of the pull request intends the code to be merged after the pull request is closed (the destination branch).
      value:
        - repositoryName: "{{ repositoryName }}"
          sourceReference: "{{ sourceReference }}"
          destinationReference: "{{ destinationReference }}"
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
      description: |
        A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token. The Amazon Web ServicesSDKs prepopulate client request tokens. If you are using an Amazon Web ServicesSDK, an idempotency token is created for you.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_pull_request_approval_rule_content"
    values={[
        { label: 'update_pull_request_approval_rule_content', value: 'update_pull_request_approval_rule_content' },
        { label: 'update_pull_request_description', value: 'update_pull_request_description' },
        { label: 'update_pull_request_status', value: 'update_pull_request_status' },
        { label: 'update_pull_request_title', value: 'update_pull_request_title' }
    ]}
>
<TabItem value="update_pull_request_approval_rule_content">

Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and the approval pool for approvers.

```sql
UPDATE aws.codecommit.pull_requests
SET 
pullRequestId = '{{ pullRequestId }}',
approvalRuleName = '{{ approvalRuleName }}',
existingRuleContentSha256 = '{{ existingRuleContentSha256 }}',
newRuleContent = '{{ newRuleContent }}'
WHERE 
region = '{{ region }}' --required
AND pullRequestId = '{{ pullRequestId }}' --required
AND approvalRuleName = '{{ approvalRuleName }}' --required
AND newRuleContent = '{{ newRuleContent }}' --required
RETURNING
approvalRule;
```
</TabItem>
<TabItem value="update_pull_request_description">

Replaces the contents of the description of a pull request.

```sql
UPDATE aws.codecommit.pull_requests
SET 
pullRequestId = '{{ pullRequestId }}',
description = '{{ description }}'
WHERE 
region = '{{ region }}' --required
AND pullRequestId = '{{ pullRequestId }}' --required
AND description = '{{ description }}' --required
RETURNING
pullRequest;
```
</TabItem>
<TabItem value="update_pull_request_status">

Updates the status of a pull request.

```sql
UPDATE aws.codecommit.pull_requests
SET 
pullRequestId = '{{ pullRequestId }}',
pullRequestStatus = '{{ pullRequestStatus }}'
WHERE 
region = '{{ region }}' --required
AND pullRequestId = '{{ pullRequestId }}' --required
AND pullRequestStatus = '{{ pullRequestStatus }}' --required
RETURNING
pullRequest;
```
</TabItem>
<TabItem value="update_pull_request_title">

Replaces the title of a pull request.

```sql
UPDATE aws.codecommit.pull_requests
SET 
pullRequestId = '{{ pullRequestId }}',
title = '{{ title }}'
WHERE 
region = '{{ region }}' --required
AND pullRequestId = '{{ pullRequestId }}' --required
AND title = '{{ title }}' --required
RETURNING
pullRequest;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_pull_request_approval_rule"
    values={[
        { label: 'delete_pull_request_approval_rule', value: 'delete_pull_request_approval_rule' }
    ]}
>
<TabItem value="delete_pull_request_approval_rule">

Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the pull request was created. You cannot delete an approval rule from a merged or closed pull request.

```sql
DELETE FROM aws.codecommit.pull_requests
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="evaluate_pull_request_approval_rules"
    values={[
        { label: 'evaluate_pull_request_approval_rules', value: 'evaluate_pull_request_approval_rules' },
        { label: 'merge_pull_request_by_fast_forward', value: 'merge_pull_request_by_fast_forward' },
        { label: 'merge_pull_request_by_squash', value: 'merge_pull_request_by_squash' },
        { label: 'merge_pull_request_by_three_way', value: 'merge_pull_request_by_three_way' },
        { label: 'override_pull_request_approval_rules', value: 'override_pull_request_approval_rules' },
        { label: 'post_comment_for_pull_request', value: 'post_comment_for_pull_request' }
    ]}
>
<TabItem value="evaluate_pull_request_approval_rules">

Evaluates whether a pull request has met all the conditions specified in its associated approval rules.

```sql
EXEC aws.codecommit.pull_requests.evaluate_pull_request_approval_rules 
@region='{{ region }}' --required 
@@json=
'{
"pullRequestId": "{{ pullRequestId }}", 
"revisionId": "{{ revisionId }}"
}'
;
```
</TabItem>
<TabItem value="merge_pull_request_by_fast_forward">

Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.

```sql
EXEC aws.codecommit.pull_requests.merge_pull_request_by_fast_forward 
@region='{{ region }}' --required 
@@json=
'{
"pullRequestId": "{{ pullRequestId }}", 
"repositoryName": "{{ repositoryName }}", 
"sourceCommitId": "{{ sourceCommitId }}"
}'
;
```
</TabItem>
<TabItem value="merge_pull_request_by_squash">

Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.

```sql
EXEC aws.codecommit.pull_requests.merge_pull_request_by_squash 
@region='{{ region }}' --required 
@@json=
'{
"pullRequestId": "{{ pullRequestId }}", 
"repositoryName": "{{ repositoryName }}", 
"sourceCommitId": "{{ sourceCommitId }}", 
"conflictDetailLevel": "{{ conflictDetailLevel }}", 
"conflictResolutionStrategy": "{{ conflictResolutionStrategy }}", 
"commitMessage": "{{ commitMessage }}", 
"authorName": "{{ authorName }}", 
"email": "{{ email }}", 
"keepEmptyFolders": {{ keepEmptyFolders }}, 
"conflictResolution": "{{ conflictResolution }}"
}'
;
```
</TabItem>
<TabItem value="merge_pull_request_by_three_way">

Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.

```sql
EXEC aws.codecommit.pull_requests.merge_pull_request_by_three_way 
@region='{{ region }}' --required 
@@json=
'{
"pullRequestId": "{{ pullRequestId }}", 
"repositoryName": "{{ repositoryName }}", 
"sourceCommitId": "{{ sourceCommitId }}", 
"conflictDetailLevel": "{{ conflictDetailLevel }}", 
"conflictResolutionStrategy": "{{ conflictResolutionStrategy }}", 
"commitMessage": "{{ commitMessage }}", 
"authorName": "{{ authorName }}", 
"email": "{{ email }}", 
"keepEmptyFolders": {{ keepEmptyFolders }}, 
"conflictResolution": "{{ conflictResolution }}"
}'
;
```
</TabItem>
<TabItem value="override_pull_request_approval_rules">

Sets aside (overrides) all approval rule requirements for a specified pull request.

```sql
EXEC aws.codecommit.pull_requests.override_pull_request_approval_rules 
@region='{{ region }}' --required 
@@json=
'{
"pullRequestId": "{{ pullRequestId }}", 
"revisionId": "{{ revisionId }}", 
"overrideStatus": "{{ overrideStatus }}"
}'
;
```
</TabItem>
<TabItem value="post_comment_for_pull_request">

Posts a comment on a pull request.

```sql
EXEC aws.codecommit.pull_requests.post_comment_for_pull_request 
@region='{{ region }}' --required 
@@json=
'{
"pullRequestId": "{{ pullRequestId }}", 
"repositoryName": "{{ repositoryName }}", 
"beforeCommitId": "{{ beforeCommitId }}", 
"afterCommitId": "{{ afterCommitId }}", 
"location": "{{ location }}", 
"content": "{{ content }}", 
"clientRequestToken": "{{ clientRequestToken }}"
}'
;
```
</TabItem>
</Tabs>
