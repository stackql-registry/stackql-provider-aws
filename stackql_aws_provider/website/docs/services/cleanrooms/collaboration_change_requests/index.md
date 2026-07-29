--- 
title: collaboration_change_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - collaboration_change_requests
  - cleanrooms
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

Creates, updates, deletes, gets or lists a <code>collaboration_change_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="collaboration_change_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.collaboration_change_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_collaboration_change_request"
    values={[
        { label: 'get_collaboration_change_request', value: 'get_collaboration_change_request' },
        { label: 'list_collaboration_change_requests', value: 'list_collaboration_change_requests' }
    ]}
>
<TabItem value="get_collaboration_change_request">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the change request. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="approvals" /></td>
    <td><code>object</code></td>
    <td>A list of approval details from collaboration members, including approval status and multi-party approval workflow information.</td>
</tr>
<tr>
    <td><CopyableCode code="changes" /></td>
    <td><code>array</code></td>
    <td>The list of changes specified in this change request.</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the collaboration being modified. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the change request was created.</td>
</tr>
<tr>
    <td><CopyableCode code="is_auto_approved" /></td>
    <td><code>boolean</code></td>
    <td>Whether the change request was automatically approved based on the collaboration's auto-approval settings.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the change request. Valid values are PENDING, APPROVED, DENIED, COMMITTED, and CANCELLED. (PENDING, APPROVED, CANCELLED, DENIED, COMMITTED)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the change request was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_collaboration_change_requests">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the change request. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="approvals" /></td>
    <td><code>object</code></td>
    <td>Summary of approval statuses from all collaboration members for this change request.</td>
</tr>
<tr>
    <td><CopyableCode code="changes" /></td>
    <td><code>array</code></td>
    <td>Summary of the changes in this change request.</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the collaboration. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the change request was created.</td>
</tr>
<tr>
    <td><CopyableCode code="is_auto_approved" /></td>
    <td><code>boolean</code></td>
    <td>Whether the change request was automatically approved.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the change request. (PENDING, APPROVED, CANCELLED, DENIED, COMMITTED)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the change request was last updated.</td>
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
    <td><a href="#get_collaboration_change_request"><CopyableCode code="get_collaboration_change_request" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-change_request_identifier"><code>change_request_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific collaboration change request.</td>
</tr>
<tr>
    <td><a href="#list_collaboration_change_requests"><CopyableCode code="list_collaboration_change_requests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all change requests for a collaboration with pagination support. Returns change requests sorted by creation time.</td>
</tr>
<tr>
    <td><a href="#create_collaboration_change_request"><CopyableCode code="create_collaboration_change_request" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-changes"><code>changes</code></a></td>
    <td></td>
    <td>Creates a new change request to modify an existing collaboration. This enables post-creation modifications to collaborations through a structured API-driven approach.</td>
</tr>
<tr>
    <td><a href="#update_collaboration_change_request"><CopyableCode code="update_collaboration_change_request" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-collaboration_identifier"><code>collaboration_identifier</code></a>, <a href="#parameter-change_request_identifier"><code>change_request_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Updates an existing collaboration change request. This operation allows approval actions for pending change requests in collaborations (APPROVE, DENY, CANCEL, COMMIT). For change requests without automatic approval, a member in the collaboration can manually APPROVE or DENY a change request. The collaboration owner can manually CANCEL or COMMIT a change request.</td>
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
<tr id="parameter-change_request_identifier">
    <td><CopyableCode code="change_request_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the specific change request to be updated within the collaboration.</td>
</tr>
<tr id="parameter-collaboration_identifier">
    <td><CopyableCode code="collaboration_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the collaboration that contains the change request to be updated.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned for an API request call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that's used to fetch the next set of results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A filter to only return change requests with the specified status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_collaboration_change_request"
    values={[
        { label: 'get_collaboration_change_request', value: 'get_collaboration_change_request' },
        { label: 'list_collaboration_change_requests', value: 'list_collaboration_change_requests' }
    ]}
>
<TabItem value="get_collaboration_change_request">

Retrieves detailed information about a specific collaboration change request.

```sql
SELECT
id,
approvals,
changes,
collaboration_id,
create_time,
is_auto_approved,
status,
update_time
FROM aws.cleanrooms.collaboration_change_requests
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND change_request_identifier = '{{ change_request_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_collaboration_change_requests">

Lists all change requests for a collaboration with pagination support. Returns change requests sorted by creation time.

```sql
SELECT
id,
approvals,
changes,
collaboration_id,
create_time,
is_auto_approved,
status,
update_time
FROM aws.cleanrooms.collaboration_change_requests
WHERE collaboration_identifier = '{{ collaboration_identifier }}' -- required
AND region = '{{ region }}' -- required
AND status = '{{ status }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_collaboration_change_request"
    values={[
        { label: 'create_collaboration_change_request', value: 'create_collaboration_change_request' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_collaboration_change_request">

Creates a new change request to modify an existing collaboration. This enables post-creation modifications to collaborations through a structured API-driven approach.

```sql
INSERT INTO aws.cleanrooms.collaboration_change_requests (
changes,
collaboration_identifier,
region
)
SELECT 
'{{ changes }}' /* required */,
'{{ collaboration_identifier }}',
'{{ region }}'
RETURNING
collaboration_change_request
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: collaboration_change_requests
  props:
    - name: collaboration_identifier
      value: "{{ collaboration_identifier }}"
      description: Required parameter for the collaboration_change_requests resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the collaboration_change_requests resource.
    - name: changes
      value:
        - specificationType: "{{ specificationType }}"
          specification:
            member:
              accountId: "{{ accountId }}"
              memberAbilities:
                - "{{ memberAbilities }}"
              displayName: "{{ displayName }}"
            collaboration:
              autoApprovedChangeTypes:
                - "{{ autoApprovedChangeTypes }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_collaboration_change_request"
    values={[
        { label: 'update_collaboration_change_request', value: 'update_collaboration_change_request' }
    ]}
>
<TabItem value="update_collaboration_change_request">

Updates an existing collaboration change request. This operation allows approval actions for pending change requests in collaborations (APPROVE, DENY, CANCEL, COMMIT). For change requests without automatic approval, a member in the collaboration can manually APPROVE or DENY a change request. The collaboration owner can manually CANCEL or COMMIT a change request.

```sql
UPDATE aws.cleanrooms.collaboration_change_requests
SET 
action = '{{ action }}'
WHERE 
collaboration_identifier = '{{ collaboration_identifier }}' --required
AND change_request_identifier = '{{ change_request_identifier }}' --required
AND region = '{{ region }}' --required
AND action = '{{ action }}' --required
RETURNING
collaboration_change_request;
```
</TabItem>
</Tabs>
