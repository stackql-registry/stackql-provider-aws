--- 
title: backup_selections
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_selections
  - backup
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

Creates, updates, deletes, gets or lists a <code>backup_selections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backup_selections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.backup_selections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_backup_selection"
    values={[
        { label: 'get_backup_selection', value: 'get_backup_selection' },
        { label: 'list_backup_selections', value: 'list_backup_selections' }
    ]}
>
<TabItem value="get_backup_selection">

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
    <td><CopyableCode code="BackupPlanId" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies a backup plan.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupSelection" /></td>
    <td><code>object</code></td>
    <td>Used to specify a set of resources to a backup plan. We recommend that you specify conditions, tags, or resources to include or exclude. Otherwise, Backup attempts to select all supported and opted-in storage resources, which could have unintended cost implications. For more information, see Assigning resources programmatically.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a backup selection is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatorRequestId" /></td>
    <td><code>string</code></td>
    <td>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice.</td>
</tr>
<tr>
    <td><CopyableCode code="SelectionId" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies the body of a request to assign a set of resources to a backup plan.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_backup_selections">

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
    <td><CopyableCode code="BackupPlanId" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies a backup plan.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatorRequestId" /></td>
    <td><code>string</code></td>
    <td>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional. If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</td>
</tr>
<tr>
    <td><CopyableCode code="IamRoleArn" /></td>
    <td><code>string</code></td>
    <td>Specifies the IAM role Amazon Resource Name (ARN) to create the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access.</td>
</tr>
<tr>
    <td><CopyableCode code="SelectionId" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies a request to assign a set of resources to a backup plan.</td>
</tr>
<tr>
    <td><CopyableCode code="SelectionName" /></td>
    <td><code>string</code></td>
    <td>The display name of a resource selection document. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_\.&#93;&#123;1,50&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#get_backup_selection"><CopyableCode code="get_backup_selection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-backup_plan_id"><code>backup_plan_id</code></a>, <a href="#parameter-selection_id"><code>selection_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns selection metadata and a document in JSON format that specifies a list of resources that are associated with a backup plan.</td>
</tr>
<tr>
    <td><a href="#list_backup_selections"><CopyableCode code="list_backup_selections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-backup_plan_id"><code>backup_plan_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns an array containing metadata of the resources associated with the target backup plan.</td>
</tr>
<tr>
    <td><a href="#create_backup_selection"><CopyableCode code="create_backup_selection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-backup_plan_id"><code>backup_plan_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BackupSelection"><code>BackupSelection</code></a></td>
    <td></td>
    <td>Creates a JSON document that specifies a set of resources to assign to a backup plan. For examples, see Assigning resources programmatically.</td>
</tr>
<tr>
    <td><a href="#delete_backup_selection"><CopyableCode code="delete_backup_selection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-backup_plan_id"><code>backup_plan_id</code></a>, <a href="#parameter-selection_id"><code>selection_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the resource selection associated with a backup plan that is specified by the SelectionId.</td>
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
<tr id="parameter-backup_plan_id">
    <td><CopyableCode code="backup_plan_id" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies a backup plan.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-selection_id">
    <td><CopyableCode code="selection_id" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies the body of a request to assign a set of resources to a backup plan.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to be returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_backup_selection"
    values={[
        { label: 'get_backup_selection', value: 'get_backup_selection' },
        { label: 'list_backup_selections', value: 'list_backup_selections' }
    ]}
>
<TabItem value="get_backup_selection">

Returns selection metadata and a document in JSON format that specifies a list of resources that are associated with a backup plan.

```sql
SELECT
BackupPlanId,
BackupSelection,
CreationDate,
CreatorRequestId,
SelectionId
FROM aws.backup.backup_selections
WHERE backup_plan_id = '{{ backup_plan_id }}' -- required
AND selection_id = '{{ selection_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_backup_selections">

Returns an array containing metadata of the resources associated with the target backup plan.

```sql
SELECT
BackupPlanId,
CreationDate,
CreatorRequestId,
IamRoleArn,
SelectionId,
SelectionName
FROM aws.backup.backup_selections
WHERE backup_plan_id = '{{ backup_plan_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_backup_selection"
    values={[
        { label: 'create_backup_selection', value: 'create_backup_selection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_backup_selection">

Creates a JSON document that specifies a set of resources to assign to a backup plan. For examples, see Assigning resources programmatically.

```sql
INSERT INTO aws.backup.backup_selections (
BackupSelection,
CreatorRequestId,
backup_plan_id,
region
)
SELECT 
'{{ BackupSelection }}' /* required */,
'{{ CreatorRequestId }}',
'{{ backup_plan_id }}',
'{{ region }}'
RETURNING
BackupPlanId,
CreationDate,
SelectionId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: backup_selections
  props:
    - name: backup_plan_id
      value: "{{ backup_plan_id }}"
      description: Required parameter for the backup_selections resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the backup_selections resource.
    - name: BackupSelection
      description: |
        Used to specify a set of resources to a backup plan. We recommend that you specify conditions, tags, or resources to include or exclude. Otherwise, Backup attempts to select all supported and opted-in storage resources, which could have unintended cost implications. For more information, see Assigning resources programmatically.
      value:
        SelectionName: "{{ SelectionName }}"
        IamRoleArn: "{{ IamRoleArn }}"
        Resources:
          - "{{ Resources }}"
        ListOfTags:
          - ConditionType: "{{ ConditionType }}"
            ConditionKey: "{{ ConditionKey }}"
            ConditionValue: "{{ ConditionValue }}"
        NotResources:
          - "{{ NotResources }}"
        Conditions:
          StringEquals:
            - ConditionKey: "{{ ConditionKey }}"
              ConditionValue: "{{ ConditionValue }}"
          StringNotEquals:
            - ConditionKey: "{{ ConditionKey }}"
              ConditionValue: "{{ ConditionValue }}"
          StringLike:
            - ConditionKey: "{{ ConditionKey }}"
              ConditionValue: "{{ ConditionValue }}"
          StringNotLike:
            - ConditionKey: "{{ ConditionKey }}"
              ConditionValue: "{{ ConditionValue }}"
    - name: CreatorRequestId
      value: "{{ CreatorRequestId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_backup_selection"
    values={[
        { label: 'delete_backup_selection', value: 'delete_backup_selection' }
    ]}
>
<TabItem value="delete_backup_selection">

Deletes the resource selection associated with a backup plan that is specified by the SelectionId.

```sql
DELETE FROM aws.backup.backup_selections
WHERE backup_plan_id = '{{ backup_plan_id }}' --required
AND selection_id = '{{ selection_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
