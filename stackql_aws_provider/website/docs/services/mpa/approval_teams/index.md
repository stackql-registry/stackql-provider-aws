--- 
title: approval_teams
hide_title: false
hide_table_of_contents: false
keywords:
  - approval_teams
  - mpa
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

Creates, updates, deletes, gets or lists an <code>approval_teams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="approval_teams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mpa.approval_teams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_approval_team"
    values={[
        { label: 'get_approval_team', value: 'get_approval_team' },
        { label: 'list_approval_teams', value: 'list_approval_teams' }
    ]}
>
<TabItem value="get_approval_team">

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
    <td><CopyableCode code="ApprovalStrategy" /></td>
    <td><code>object</code></td>
    <td>An ApprovalStrategyResponse object. Contains details for how the team grants approval.</td>
</tr>
<tr>
    <td><CopyableCode code="Approvers" /></td>
    <td><code>array</code></td>
    <td>An array of GetApprovalTeamResponseApprover objects. Contains details for the approvers in the team.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the team.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the team was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Description for the team.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the team was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Name of the approval team.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfApprovers" /></td>
    <td><code>integer</code></td>
    <td>Total number of approvers in the team.</td>
</tr>
<tr>
    <td><CopyableCode code="PendingUpdate" /></td>
    <td><code>object</code></td>
    <td>A PendingUpdate object. Contains details for the pending updates for the team, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="Policies" /></td>
    <td><code>array</code></td>
    <td>An array of PolicyReference objects. Contains a list of policies that define the permissions for team resources.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Status for the team. For more information, see Team health in the Multi-party approval User Guide. (ACTIVE, INACTIVE, DELETING, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusCode" /></td>
    <td><code>string</code></td>
    <td>Status code for the approval team. For more information, see Team health in the Multi-party approval User Guide. (VALIDATING, PENDING_ACTIVATION, FAILED_VALIDATION, FAILED_ACTIVATION, UPDATE_PENDING_APPROVAL, UPDATE_PENDING_ACTIVATION, UPDATE_FAILED_APPROVAL, UPDATE_FAILED_ACTIVATION, UPDATE_FAILED_VALIDATION, DELETE_PENDING_APPROVAL, DELETE_FAILED_APPROVAL, DELETE_FAILED_VALIDATION)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>Message describing the status for the team.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateSessionArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the session.</td>
</tr>
<tr>
    <td><CopyableCode code="VersionId" /></td>
    <td><code>string</code></td>
    <td>Version ID for the team.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_approval_teams">

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
    <td><CopyableCode code="ApprovalStrategy" /></td>
    <td><code>object</code></td>
    <td>An ApprovalStrategyResponse object. Contains details for how an approval team grants approval.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the team. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:mpa:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:approval-team/&#91;a-zA-Z0-9._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the team was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Description for the team.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Name of the team. (pattern: &lt;code&gt;&#91;a-zA-Z0-9._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfApprovers" /></td>
    <td><code>integer</code></td>
    <td>Total number of approvers in the team.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Status for the team. For more information, see Team health in the Multi-party approval User Guide. (ACTIVE, INACTIVE, DELETING, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusCode" /></td>
    <td><code>string</code></td>
    <td>Status code for the team. For more information, see Team health in the Multi-party approval User Guide. (VALIDATING, PENDING_ACTIVATION, FAILED_VALIDATION, FAILED_ACTIVATION, UPDATE_PENDING_APPROVAL, UPDATE_PENDING_ACTIVATION, UPDATE_FAILED_APPROVAL, UPDATE_FAILED_ACTIVATION, UPDATE_FAILED_VALIDATION, DELETE_PENDING_APPROVAL, DELETE_FAILED_APPROVAL, DELETE_FAILED_VALIDATION)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>Message describing the status for the team.</td>
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
    <td><a href="#get_approval_team"><CopyableCode code="get_approval_team" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details for an approval team.</td>
</tr>
<tr>
    <td><a href="#list_approval_teams"><CopyableCode code="list_approval_teams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a list of approval teams.</td>
</tr>
<tr>
    <td><a href="#create_approval_team"><CopyableCode code="create_approval_team" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApprovalStrategy"><code>ApprovalStrategy</code></a></td>
    <td></td>
    <td>Creates a new approval team. For more information, see Approval team in the Multi-party approval User Guide.</td>
</tr>
<tr>
    <td><a href="#update_approval_team"><CopyableCode code="update_approval_team" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an approval team. You can request to update the team description, approval threshold, and approvers in the team. Updates require team approval Updates to an active team must be approved by the team.</td>
</tr>
<tr>
    <td><a href="#start_approval_team_baseline"><CopyableCode code="start_approval_team_baseline" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts a baseline session for specified approvers on an ACTIVE approval team.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the approval team.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return in the response. If more results exist than the specified MaxResults value, a token is included in the response so that you can retrieve the remaining results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If present, indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a next call to the operation to get more output. You can repeat this until the NextToken response element returns null.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_approval_team"
    values={[
        { label: 'get_approval_team', value: 'get_approval_team' },
        { label: 'list_approval_teams', value: 'list_approval_teams' }
    ]}
>
<TabItem value="get_approval_team">

Returns details for an approval team.

```sql
SELECT
ApprovalStrategy,
Approvers,
Arn,
CreationTime,
Description,
LastUpdateTime,
Name,
NumberOfApprovers,
PendingUpdate,
Policies,
Status,
StatusCode,
StatusMessage,
UpdateSessionArn,
VersionId
FROM aws.mpa.approval_teams
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_approval_teams">

Returns a list of approval teams.

```sql
SELECT
ApprovalStrategy,
Arn,
CreationTime,
Description,
Name,
NumberOfApprovers,
Status,
StatusCode,
StatusMessage
FROM aws.mpa.approval_teams
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_approval_team"
    values={[
        { label: 'create_approval_team', value: 'create_approval_team' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_approval_team">

Creates a new approval team. For more information, see Approval team in the Multi-party approval User Guide.

```sql
INSERT INTO aws.mpa.approval_teams (
ClientToken,
ApprovalStrategy,
Approvers,
Description,
Policies,
Name,
Tags,
region
)
SELECT 
'{{ ClientToken }}',
'{{ ApprovalStrategy }}' /* required */,
'{{ Approvers }}',
'{{ Description }}',
'{{ Policies }}',
'{{ Name }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
Arn,
CreationTime,
Name,
VersionId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: approval_teams
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the approval_teams resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: ApprovalStrategy
      description: |
        Strategy for how an approval team grants approval.
      value:
        MofN:
          MinApprovalsRequired: {{ MinApprovalsRequired }}
    - name: Approvers
      value:
        - PrimaryIdentityId: "{{ PrimaryIdentityId }}"
          PrimaryIdentitySourceArn: "{{ PrimaryIdentitySourceArn }}"
    - name: Description
      value: "{{ Description }}"
    - name: Policies
      value:
        - PolicyArn: "{{ PolicyArn }}"
    - name: Name
      value: "{{ Name }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_approval_team"
    values={[
        { label: 'update_approval_team', value: 'update_approval_team' }
    ]}
>
<TabItem value="update_approval_team">

Updates an approval team. You can request to update the team description, approval threshold, and approvers in the team. Updates require team approval Updates to an active team must be approved by the team.

```sql
UPDATE aws.mpa.approval_teams
SET 
ApprovalStrategy = '{{ ApprovalStrategy }}',
Approvers = '{{ Approvers }}',
Description = '{{ Description }}',
UpdateActions = '{{ UpdateActions }}'
WHERE 
arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
RETURNING
VersionId;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_approval_team_baseline"
    values={[
        { label: 'start_approval_team_baseline', value: 'start_approval_team_baseline' }
    ]}
>
<TabItem value="start_approval_team_baseline">

Starts a baseline session for specified approvers on an ACTIVE approval team.

```sql
EXEC aws.mpa.approval_teams.start_approval_team_baseline 
@arn='{{ arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ApproverIds": "{{ ApproverIds }}"
}'
;
```
</TabItem>
</Tabs>
