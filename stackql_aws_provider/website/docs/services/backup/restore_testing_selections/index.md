--- 
title: restore_testing_selections
hide_title: false
hide_table_of_contents: false
keywords:
  - restore_testing_selections
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

Creates, updates, deletes, gets or lists a <code>restore_testing_selections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="restore_testing_selections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.restore_testing_selections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_restore_testing_selection"
    values={[
        { label: 'get_restore_testing_selection', value: 'get_restore_testing_selection' },
        { label: 'list_restore_testing_selections', value: 'list_restore_testing_selections' }
    ]}
>
<TabItem value="get_restore_testing_selection">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a restore testing selection was created, in Unix format and Coordinated Universal Time (UTC). The value of CreationTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 201812:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatorRequestId" /></td>
    <td><code>string</code></td>
    <td>This identifies the request and allows failed requests to be retried without the risk of running the operation twice. If the request includes a CreatorRequestId that matches an existing backup plan, that plan is returned. This parameter is optional. If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</td>
</tr>
<tr>
    <td><CopyableCode code="IamRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that Backup uses to create the target resource; for example:arn:aws:iam::123456789012:role/S3Access.</td>
</tr>
<tr>
    <td><CopyableCode code="ProtectedResourceArns" /></td>
    <td><code>array</code></td>
    <td>You can include specific ARNs, such as ProtectedResourceArns: &#91;"arn:aws:...", "arn:aws:..."&#93; or you can include a wildcard: ProtectedResourceArns: &#91;"*"&#93;, but not both.</td>
</tr>
<tr>
    <td><CopyableCode code="ProtectedResourceConditions" /></td>
    <td><code>object</code></td>
    <td>In a resource testing selection, this parameter filters by specific conditions such as StringEquals or StringNotEquals.</td>
</tr>
<tr>
    <td><CopyableCode code="ProtectedResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Web Services resource included in a resource testing selection; for example, an Amazon EBS volume or an Amazon RDS database.</td>
</tr>
<tr>
    <td><CopyableCode code="RestoreMetadataOverrides" /></td>
    <td><code>object</code></td>
    <td>You can override certain restore metadata keys by including the parameter RestoreMetadataOverrides in the body of RestoreTestingSelection. Key values are not case sensitive. See the complete list of restore testing inferred metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="RestoreTestingPlanName" /></td>
    <td><code>string</code></td>
    <td>The RestoreTestingPlanName is a unique string that is the name of the restore testing plan.</td>
</tr>
<tr>
    <td><CopyableCode code="RestoreTestingSelectionName" /></td>
    <td><code>string</code></td>
    <td>The unique name of the restore testing selection that belongs to the related restore testing plan. The name consists of only alphanumeric characters and underscores. Maximum length is 50.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidationWindowHours" /></td>
    <td><code>integer</code></td>
    <td>This is amount of hours (1 to 168) available to run a validation script on the data. The data will be deleted upon the completion of the validation script or the end of the specified retention period, whichever comes first.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_restore_testing_selections">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a restore testing selection was created, in Unix format and Coordinated Universal Time (UTC). The value of CreationTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26,2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="IamRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that Backup uses to create the target resource; for example: arn:aws:iam::123456789012:role/S3Access.</td>
</tr>
<tr>
    <td><CopyableCode code="ProtectedResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Web Services resource included in a restore testing selection; for example, an Amazon EBS volume or an Amazon RDS database.</td>
</tr>
<tr>
    <td><CopyableCode code="RestoreTestingPlanName" /></td>
    <td><code>string</code></td>
    <td>Unique string that is the name of the restore testing plan. The name cannot be changed after creation. The name must consist of only alphanumeric characters and underscores. Maximum length is 50.</td>
</tr>
<tr>
    <td><CopyableCode code="RestoreTestingSelectionName" /></td>
    <td><code>string</code></td>
    <td>Unique name of a restore testing selection. The name consists of only alphanumeric characters and underscores. Maximum length is 50.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidationWindowHours" /></td>
    <td><code>integer</code></td>
    <td>This value represents the time, in hours, data is retained after a restore test so that optional validation can be completed. Accepted value is an integer between 0 and 168 (the hourly equivalent of seven days).</td>
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
    <td><a href="#get_restore_testing_selection"><CopyableCode code="get_restore_testing_selection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restore_testing_plan_name"><code>restore_testing_plan_name</code></a>, <a href="#parameter-restore_testing_selection_name"><code>restore_testing_selection_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns RestoreTestingSelection, which displays resources and elements of the restore testing plan.</td>
</tr>
<tr>
    <td><a href="#list_restore_testing_selections"><CopyableCode code="list_restore_testing_selections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restore_testing_plan_name"><code>restore_testing_plan_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a list of restore testing selections. Can be filtered by MaxResults and RestoreTestingPlanName.</td>
</tr>
<tr>
    <td><a href="#create_restore_testing_selection"><CopyableCode code="create_restore_testing_selection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-restore_testing_plan_name"><code>restore_testing_plan_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RestoreTestingSelection"><code>RestoreTestingSelection</code></a></td>
    <td></td>
    <td>This request can be sent after CreateRestoreTestingPlan request returns successfully. This is the second part of creating a resource testing plan, and it must be completed sequentially. This consists of RestoreTestingSelectionName, ProtectedResourceType, and one of the following: ProtectedResourceArns ProtectedResourceConditions Each protected resource type can have one single value. A restore testing selection can include a wildcard value ("*") for ProtectedResourceArns along with ProtectedResourceConditions. Alternatively, you can include up to 30 specific protected resource ARNs in ProtectedResourceArns. Cannot select by both protected resource types AND specific ARNs. Request will fail if both are included.</td>
</tr>
<tr>
    <td><a href="#update_restore_testing_selection"><CopyableCode code="update_restore_testing_selection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-restore_testing_plan_name"><code>restore_testing_plan_name</code></a>, <a href="#parameter-restore_testing_selection_name"><code>restore_testing_selection_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RestoreTestingSelection"><code>RestoreTestingSelection</code></a></td>
    <td></td>
    <td>Updates the specified restore testing selection. Most elements except the RestoreTestingSelectionName can be updated with this request. You can use either protected resource ARNs or conditions, but not both.</td>
</tr>
<tr>
    <td><a href="#delete_restore_testing_selection"><CopyableCode code="delete_restore_testing_selection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-restore_testing_plan_name"><code>restore_testing_plan_name</code></a>, <a href="#parameter-restore_testing_selection_name"><code>restore_testing_selection_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Input the Restore Testing Plan name and Restore Testing Selection name. All testing selections associated with a restore testing plan must be deleted before the restore testing plan can be deleted.</td>
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
<tr id="parameter-restore_testing_plan_name">
    <td><CopyableCode code="restore_testing_plan_name" /></td>
    <td><code>string</code></td>
    <td>Required unique name of the restore testing plan that contains the restore testing selection you wish to delete.</td>
</tr>
<tr id="parameter-restore_testing_selection_name">
    <td><CopyableCode code="restore_testing_selection_name" /></td>
    <td><code>string</code></td>
    <td>Required unique name of the restore testing selection you wish to delete.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to be returned.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the nexttoken.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_restore_testing_selection"
    values={[
        { label: 'get_restore_testing_selection', value: 'get_restore_testing_selection' },
        { label: 'list_restore_testing_selections', value: 'list_restore_testing_selections' }
    ]}
>
<TabItem value="get_restore_testing_selection">

Returns RestoreTestingSelection, which displays resources and elements of the restore testing plan.

```sql
SELECT
CreationTime,
CreatorRequestId,
IamRoleArn,
ProtectedResourceArns,
ProtectedResourceConditions,
ProtectedResourceType,
RestoreMetadataOverrides,
RestoreTestingPlanName,
RestoreTestingSelectionName,
ValidationWindowHours
FROM aws.backup.restore_testing_selections
WHERE restore_testing_plan_name = '{{ restore_testing_plan_name }}' -- required
AND restore_testing_selection_name = '{{ restore_testing_selection_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_restore_testing_selections">

Returns a list of restore testing selections. Can be filtered by MaxResults and RestoreTestingPlanName.

```sql
SELECT
CreationTime,
IamRoleArn,
ProtectedResourceType,
RestoreTestingPlanName,
RestoreTestingSelectionName,
ValidationWindowHours
FROM aws.backup.restore_testing_selections
WHERE restore_testing_plan_name = '{{ restore_testing_plan_name }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_restore_testing_selection"
    values={[
        { label: 'create_restore_testing_selection', value: 'create_restore_testing_selection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_restore_testing_selection">

This request can be sent after CreateRestoreTestingPlan request returns successfully. This is the second part of creating a resource testing plan, and it must be completed sequentially. This consists of RestoreTestingSelectionName, ProtectedResourceType, and one of the following: ProtectedResourceArns ProtectedResourceConditions Each protected resource type can have one single value. A restore testing selection can include a wildcard value ("*") for ProtectedResourceArns along with ProtectedResourceConditions. Alternatively, you can include up to 30 specific protected resource ARNs in ProtectedResourceArns. Cannot select by both protected resource types AND specific ARNs. Request will fail if both are included.

```sql
INSERT INTO aws.backup.restore_testing_selections (
CreatorRequestId,
RestoreTestingSelection,
restore_testing_plan_name,
region
)
SELECT 
'{{ CreatorRequestId }}',
'{{ RestoreTestingSelection }}' /* required */,
'{{ restore_testing_plan_name }}',
'{{ region }}'
RETURNING
CreationTime,
RestoreTestingPlanArn,
RestoreTestingPlanName,
RestoreTestingSelectionName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: restore_testing_selections
  props:
    - name: restore_testing_plan_name
      value: "{{ restore_testing_plan_name }}"
      description: Required parameter for the restore_testing_selections resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the restore_testing_selections resource.
    - name: CreatorRequestId
      value: "{{ CreatorRequestId }}"
    - name: RestoreTestingSelection
      description: |
        This contains metadata about a specific restore testing selection. ProtectedResourceType is required, such as Amazon EBS or Amazon EC2. This consists of RestoreTestingSelectionName, ProtectedResourceType, and one of the following: ProtectedResourceArns ProtectedResourceConditions Each protected resource type can have one single value. A restore testing selection can include a wildcard value ("*") for ProtectedResourceArns along with ProtectedResourceConditions. Alternatively, you can include up to 30 specific protected resource ARNs in ProtectedResourceArns. ProtectedResourceConditions examples include as StringEquals and StringNotEquals.
      value:
        IamRoleArn: "{{ IamRoleArn }}"
        ProtectedResourceArns:
          - "{{ ProtectedResourceArns }}"
        ProtectedResourceConditions:
          StringEquals:
            - Key: "{{ Key }}"
              Value: "{{ Value }}"
          StringNotEquals:
            - Key: "{{ Key }}"
              Value: "{{ Value }}"
        ProtectedResourceType: "{{ ProtectedResourceType }}"
        RestoreMetadataOverrides: "{{ RestoreMetadataOverrides }}"
        RestoreTestingSelectionName: "{{ RestoreTestingSelectionName }}"
        ValidationWindowHours: {{ ValidationWindowHours }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_restore_testing_selection"
    values={[
        { label: 'update_restore_testing_selection', value: 'update_restore_testing_selection' }
    ]}
>
<TabItem value="update_restore_testing_selection">

Updates the specified restore testing selection. Most elements except the RestoreTestingSelectionName can be updated with this request. You can use either protected resource ARNs or conditions, but not both.

```sql
UPDATE aws.backup.restore_testing_selections
SET 
RestoreTestingSelection = '{{ RestoreTestingSelection }}'
WHERE 
restore_testing_plan_name = '{{ restore_testing_plan_name }}' --required
AND restore_testing_selection_name = '{{ restore_testing_selection_name }}' --required
AND region = '{{ region }}' --required
AND RestoreTestingSelection = '{{ RestoreTestingSelection }}' --required
RETURNING
CreationTime,
RestoreTestingPlanArn,
RestoreTestingPlanName,
RestoreTestingSelectionName,
UpdateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_restore_testing_selection"
    values={[
        { label: 'delete_restore_testing_selection', value: 'delete_restore_testing_selection' }
    ]}
>
<TabItem value="delete_restore_testing_selection">

Input the Restore Testing Plan name and Restore Testing Selection name. All testing selections associated with a restore testing plan must be deleted before the restore testing plan can be deleted.

```sql
DELETE FROM aws.backup.restore_testing_selections
WHERE restore_testing_plan_name = '{{ restore_testing_plan_name }}' --required
AND restore_testing_selection_name = '{{ restore_testing_selection_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
