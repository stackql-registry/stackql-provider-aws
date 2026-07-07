--- 
title: graphs
hide_title: false
hide_table_of_contents: false
keywords:
  - graphs
  - detective
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

Creates, updates, deletes, gets or lists a <code>graphs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="graphs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.detective.graphs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_graphs"
    values={[
        { label: 'list_graphs', value: 'list_graphs' }
    ]}
>
<TabItem value="list_graphs">

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
    <td><CopyableCode code="GraphList" /></td>
    <td><code>array</code></td>
    <td>A list of behavior graphs that the account is an administrator account for.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If there are more behavior graphs remaining in the results, then this is the pagination token to use to request the next page of behavior graphs.</td>
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
    <td><a href="#list_graphs"><CopyableCode code="list_graphs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the list of behavior graphs that the calling account is an administrator account of. This operation can only be called by an administrator account. Because an account can currently only be the administrator of one behavior graph within a Region, the results always contain a single behavior graph.</td>
</tr>
<tr>
    <td><a href="#create_graph"><CopyableCode code="create_graph" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new behavior graph for the calling account, and sets that account as the administrator account. This operation is called by the account that is enabling Detective. The operation also enables Detective for the calling account in the currently selected Region. It returns the ARN of the new behavior graph. CreateGraph triggers a process to create the corresponding data tables for the new behavior graph. An account can only be the administrator account for one behavior graph within a Region. If the same account calls CreateGraph with the same administrator account, it always returns the same behavior graph ARN. It does not create a new behavior graph.</td>
</tr>
<tr>
    <td><a href="#disassociate_membership"><CopyableCode code="disassociate_membership" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GraphArn"><code>GraphArn</code></a></td>
    <td></td>
    <td>Removes the member account from the specified behavior graph. This operation can only be called by an invited member account that has the ENABLED status. DisassociateMembership cannot be called by an organization account in the organization behavior graph. For the organization behavior graph, the Detective administrator account determines which organization accounts to enable or disable as member accounts.</td>
</tr>
<tr>
    <td><a href="#delete_graph"><CopyableCode code="delete_graph" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables the specified behavior graph and queues it to be deleted. This operation removes the behavior graph from each member account's list of behavior graphs. DeleteGraph can only be called by the administrator account for a behavior graph.</td>
</tr>
<tr>
    <td><a href="#accept_invitation"><CopyableCode code="accept_invitation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GraphArn"><code>GraphArn</code></a></td>
    <td></td>
    <td>Accepts an invitation for the member account to contribute data to a behavior graph. This operation can only be called by an invited member account. The request provides the ARN of behavior graph. The member account status in the graph must be INVITED.</td>
</tr>
<tr>
    <td><a href="#reject_invitation"><CopyableCode code="reject_invitation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GraphArn"><code>GraphArn</code></a></td>
    <td></td>
    <td>Rejects an invitation to contribute the account data to a behavior graph. This operation must be called by an invited member account that has the INVITED status. RejectInvitation cannot be called by an organization account in the organization behavior graph. In the organization behavior graph, organization accounts do not receive an invitation.</td>
</tr>
<tr>
    <td><a href="#start_investigation"><CopyableCode code="start_investigation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GraphArn"><code>GraphArn</code></a>, <a href="#parameter-EntityArn"><code>EntityArn</code></a>, <a href="#parameter-ScopeStartTime"><code>ScopeStartTime</code></a>, <a href="#parameter-ScopeEndTime"><code>ScopeEndTime</code></a></td>
    <td></td>
    <td>Detective investigations lets you investigate IAM users and IAM roles using indicators of compromise. An indicator of compromise (IOC) is an artifact observed in or on a network, system, or environment that can (with a high level of confidence) identify malicious activity or a security incident. StartInvestigation initiates an investigation on an entity in a behavior graph.</td>
</tr>
<tr>
    <td><a href="#start_monitoring_member"><CopyableCode code="start_monitoring_member" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GraphArn"><code>GraphArn</code></a>, <a href="#parameter-AccountId"><code>AccountId</code></a></td>
    <td></td>
    <td>Sends a request to enable data ingest for a member account that has a status of ACCEPTED_BUT_DISABLED. For valid member accounts, the status is updated as follows. If Detective enabled the member account, then the new status is ENABLED. If Detective cannot enable the member account, the status remains ACCEPTED_BUT_DISABLED.</td>
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
    defaultValue="list_graphs"
    values={[
        { label: 'list_graphs', value: 'list_graphs' }
    ]}
>
<TabItem value="list_graphs">

Returns the list of behavior graphs that the calling account is an administrator account of. This operation can only be called by an administrator account. Because an account can currently only be the administrator of one behavior graph within a Region, the results always contain a single behavior graph.

```sql
SELECT
GraphList,
NextToken
FROM aws.detective.graphs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_graph"
    values={[
        { label: 'create_graph', value: 'create_graph' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_graph">

Creates a new behavior graph for the calling account, and sets that account as the administrator account. This operation is called by the account that is enabling Detective. The operation also enables Detective for the calling account in the currently selected Region. It returns the ARN of the new behavior graph. CreateGraph triggers a process to create the corresponding data tables for the new behavior graph. An account can only be the administrator account for one behavior graph within a Region. If the same account calls CreateGraph with the same administrator account, it always returns the same behavior graph ARN. It does not create a new behavior graph.

```sql
INSERT INTO aws.detective.graphs (
Tags,
region
)
SELECT 
'{{ Tags }}',
'{{ region }}'
RETURNING
GraphArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: graphs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the graphs resource.
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="disassociate_membership"
    values={[
        { label: 'disassociate_membership', value: 'disassociate_membership' }
    ]}
>
<TabItem value="disassociate_membership">

Removes the member account from the specified behavior graph. This operation can only be called by an invited member account that has the ENABLED status. DisassociateMembership cannot be called by an organization account in the organization behavior graph. For the organization behavior graph, the Detective administrator account determines which organization accounts to enable or disable as member accounts.

```sql
UPDATE aws.detective.graphs
SET 
GraphArn = '{{ GraphArn }}'
WHERE 
region = '{{ region }}' --required
AND GraphArn = '{{ GraphArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_graph"
    values={[
        { label: 'delete_graph', value: 'delete_graph' }
    ]}
>
<TabItem value="delete_graph">

Disables the specified behavior graph and queues it to be deleted. This operation removes the behavior graph from each member account's list of behavior graphs. DeleteGraph can only be called by the administrator account for a behavior graph.

```sql
DELETE FROM aws.detective.graphs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_invitation"
    values={[
        { label: 'accept_invitation', value: 'accept_invitation' },
        { label: 'reject_invitation', value: 'reject_invitation' },
        { label: 'start_investigation', value: 'start_investigation' },
        { label: 'start_monitoring_member', value: 'start_monitoring_member' }
    ]}
>
<TabItem value="accept_invitation">

Accepts an invitation for the member account to contribute data to a behavior graph. This operation can only be called by an invited member account. The request provides the ARN of behavior graph. The member account status in the graph must be INVITED.

```sql
EXEC aws.detective.graphs.accept_invitation 
@region='{{ region }}' --required 
@@json=
'{
"GraphArn": "{{ GraphArn }}"
}'
;
```
</TabItem>
<TabItem value="reject_invitation">

Rejects an invitation to contribute the account data to a behavior graph. This operation must be called by an invited member account that has the INVITED status. RejectInvitation cannot be called by an organization account in the organization behavior graph. In the organization behavior graph, organization accounts do not receive an invitation.

```sql
EXEC aws.detective.graphs.reject_invitation 
@region='{{ region }}' --required 
@@json=
'{
"GraphArn": "{{ GraphArn }}"
}'
;
```
</TabItem>
<TabItem value="start_investigation">

Detective investigations lets you investigate IAM users and IAM roles using indicators of compromise. An indicator of compromise (IOC) is an artifact observed in or on a network, system, or environment that can (with a high level of confidence) identify malicious activity or a security incident. StartInvestigation initiates an investigation on an entity in a behavior graph.

```sql
EXEC aws.detective.graphs.start_investigation 
@region='{{ region }}' --required 
@@json=
'{
"GraphArn": "{{ GraphArn }}", 
"EntityArn": "{{ EntityArn }}", 
"ScopeStartTime": "{{ ScopeStartTime }}", 
"ScopeEndTime": "{{ ScopeEndTime }}"
}'
;
```
</TabItem>
<TabItem value="start_monitoring_member">

Sends a request to enable data ingest for a member account that has a status of ACCEPTED_BUT_DISABLED. For valid member accounts, the status is updated as follows. If Detective enabled the member account, then the new status is ENABLED. If Detective cannot enable the member account, the status remains ACCEPTED_BUT_DISABLED.

```sql
EXEC aws.detective.graphs.start_monitoring_member 
@region='{{ region }}' --required 
@@json=
'{
"GraphArn": "{{ GraphArn }}", 
"AccountId": "{{ AccountId }}"
}'
;
```
</TabItem>
</Tabs>
