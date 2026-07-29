--- 
title: ops_items
hide_title: false
hide_table_of_contents: false
keywords:
  - ops_items
  - ssm
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

Creates, updates, deletes, gets or lists an <code>ops_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ops_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.ops_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ops_item"
    values={[
        { label: 'get_ops_item', value: 'get_ops_item' },
        { label: 'describe_ops_items', value: 'describe_ops_items' }
    ]}
>
<TabItem value="get_ops_item">

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
    <td><CopyableCode code="actual_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time a runbook workflow ended. Currently reported only for the OpsItem type /aws/changerequest.</td>
</tr>
<tr>
    <td><CopyableCode code="actual_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time a runbook workflow started. Currently reported only for the OpsItem type /aws/changerequest.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>An OpsItem category. Category options include: Availability, Cost, Performance, Recovery, Security. (pattern: &lt;code&gt;^(?!\s*$).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Amazon Web Services account that created the OpsItem.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the OpsItem was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The OpsItem description. (pattern: &lt;code&gt;&#91;\s\S&#93;*\S&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Amazon Web Services account that last updated the OpsItem.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the OpsItem was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="notifications" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Name (ARN) of an Amazon Simple Notification Service (Amazon SNS) topic where notifications are sent when this OpsItem is edited or changed.</td>
</tr>
<tr>
    <td><CopyableCode code="operational_data" /></td>
    <td><code>object</code></td>
    <td>Operational data is custom data that provides useful reference details about the OpsItem. For example, you can specify log files, error strings, license keys, troubleshooting tips, or other relevant data. You enter operational data as key-value pairs. The key has a maximum length of 128 characters. The value has a maximum size of 20 KB. Operational data keys can't begin with the following: amazon, aws, amzn, ssm, /amazon, /aws, /amzn, /ssm. You can choose to make the data searchable by other users in the account or you can restrict search access. Searchable data means that all users with access to the OpsItem Overview page (as provided by the DescribeOpsItems API operation) can view and search on the specified data. Operational data that isn't searchable is only viewable by users who have access to the OpsItem (as provided by the GetOpsItem API operation). Use the /aws/resources key in OperationalData to specify a related resource in the request. Use the /aws/automations key in OperationalData to associate an Automation runbook with the OpsItem. To view Amazon Web Services CLI example commands that use these keys, see Creating OpsItems manually in the Amazon Web Services Systems Manager User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="ops_item_arn" /></td>
    <td><code>string</code></td>
    <td>The OpsItem Amazon Resource Name (ARN). (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:ssm:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;0-9&#93;&#123;12&#125;:opsitem.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ops_item_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the OpsItem. (pattern: &lt;code&gt;^(oi)-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ops_item_type" /></td>
    <td><code>string</code></td>
    <td>The type of OpsItem. Systems Manager supports the following types of OpsItems: /aws/issue This type of OpsItem is used for default OpsItems created by OpsCenter. /aws/changerequest This type of OpsItem is used by Change Manager for reviewing and approving or rejecting change requests. /aws/insight This type of OpsItem is used by OpsCenter for aggregating and reporting on duplicate OpsItems.</td>
</tr>
<tr>
    <td><CopyableCode code="planned_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time specified in a change request for a runbook workflow to end. Currently supported only for the OpsItem type /aws/changerequest.</td>
</tr>
<tr>
    <td><CopyableCode code="planned_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time specified in a change request for a runbook workflow to start. Currently supported only for the OpsItem type /aws/changerequest.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The importance of this OpsItem in relation to other OpsItems in the system.</td>
</tr>
<tr>
    <td><CopyableCode code="related_ops_items" /></td>
    <td><code>array</code></td>
    <td>One or more OpsItems that share something in common with the current OpsItem. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the OpsItem. Severity options range from 1 to 4. (pattern: &lt;code&gt;^(?!\s*$).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The origin of the OpsItem, such as Amazon EC2 or Systems Manager. The impacted resource is a subset of source. (pattern: &lt;code&gt;^(?!\s*$).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The OpsItem status. For more information, see Editing OpsItem details in the Amazon Web Services Systems Manager User Guide. (Open, InProgress, Resolved, Pending, TimedOut, Cancelling, Cancelled, Failed, CompletedWithSuccess, CompletedWithFailure, Scheduled, RunbookInProgress, PendingChangeCalendarOverride, ChangeCalendarOverrideApproved, ChangeCalendarOverrideRejected, PendingApproval, Approved, Revoked, Rejected, Closed)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>A short heading that describes the nature of the OpsItem and the impacted resource. (pattern: &lt;code&gt;^(?!\s*$).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of this OpsItem. Each time the OpsItem is edited the version number increments by one.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_ops_items">

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
    <td><CopyableCode code="actual_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time a runbook workflow ended. Currently reported only for the OpsItem type /aws/changerequest.</td>
</tr>
<tr>
    <td><CopyableCode code="actual_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time a runbook workflow started. Currently reported only for the OpsItem type /aws/changerequest.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>A list of OpsItems by category. (pattern: &lt;code&gt;^(?!\s*$).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM entity that created the OpsItem.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the OpsItem was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM entity that created the OpsItem.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the OpsItem was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="operational_data" /></td>
    <td><code>object</code></td>
    <td>Operational data is custom data that provides useful reference details about the OpsItem.</td>
</tr>
<tr>
    <td><CopyableCode code="ops_item_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the OpsItem. (pattern: &lt;code&gt;^(oi)-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ops_item_type" /></td>
    <td><code>string</code></td>
    <td>The type of OpsItem. Systems Manager supports the following types of OpsItems: /aws/issue This type of OpsItem is used for default OpsItems created by OpsCenter. /aws/changerequest This type of OpsItem is used by Change Manager for reviewing and approving or rejecting change requests. /aws/insight This type of OpsItem is used by OpsCenter for aggregating and reporting on duplicate OpsItems.</td>
</tr>
<tr>
    <td><CopyableCode code="planned_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time specified in a change request for a runbook workflow to end. Currently supported only for the OpsItem type /aws/changerequest.</td>
</tr>
<tr>
    <td><CopyableCode code="planned_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time specified in a change request for a runbook workflow to start. Currently supported only for the OpsItem type /aws/changerequest.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The importance of this OpsItem in relation to other OpsItems in the system.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>A list of OpsItems by severity. (pattern: &lt;code&gt;^(?!\s*$).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The impacted Amazon Web Services resource. (pattern: &lt;code&gt;^(?!\s*$).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The OpsItem status. (Open, InProgress, Resolved, Pending, TimedOut, Cancelling, Cancelled, Failed, CompletedWithSuccess, CompletedWithFailure, Scheduled, RunbookInProgress, PendingChangeCalendarOverride, ChangeCalendarOverrideApproved, ChangeCalendarOverrideRejected, PendingApproval, Approved, Revoked, Rejected, Closed)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>A short heading that describes the nature of the OpsItem and the impacted resource. (pattern: &lt;code&gt;^(?!\s*$).+&lt;/code&gt;)</td>
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
    <td><a href="#get_ops_item"><CopyableCode code="get_ops_item" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get information about an OpsItem by using the ID. You must have permission in Identity and Access Management (IAM) to view information about an OpsItem. For more information, see Set up OpsCenter in the Amazon Web Services Systems Manager User Guide. Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see Amazon Web Services Systems Manager OpsCenter in the Amazon Web Services Systems Manager User Guide.</td>
</tr>
<tr>
    <td><a href="#describe_ops_items"><CopyableCode code="describe_ops_items" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Query a set of OpsItems. You must have permission in Identity and Access Management (IAM) to query a list of OpsItems. For more information, see Set up OpsCenter in the Amazon Web Services Systems Manager User Guide. Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see Amazon Web Services Systems Manager OpsCenter in the Amazon Web Services Systems Manager User Guide.</td>
</tr>
<tr>
    <td><a href="#create_ops_item"><CopyableCode code="create_ops_item" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Description"><code>Description</code></a></td>
    <td></td>
    <td>Creates a new OpsItem. You must have permission in Identity and Access Management (IAM) to create a new OpsItem. For more information, see Set up OpsCenter in the Amazon Web Services Systems Manager User Guide. Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see Amazon Web Services Systems Manager OpsCenter in the Amazon Web Services Systems Manager User Guide.</td>
</tr>
<tr>
    <td><a href="#update_ops_item"><CopyableCode code="update_ops_item" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OpsItemId"><code>OpsItemId</code></a></td>
    <td></td>
    <td>Edit or change an OpsItem. You must have permission in Identity and Access Management (IAM) to update an OpsItem. For more information, see Set up OpsCenter in the Amazon Web Services Systems Manager User Guide. Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see Amazon Web Services Systems Manager OpsCenter in the Amazon Web Services Systems Manager User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_ops_item"><CopyableCode code="delete_ops_item" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an OpsItem. You must have permission in Identity and Access Management (IAM) to delete an OpsItem. Note the following important information about this operation. Deleting an OpsItem is irreversible. You can't restore a deleted OpsItem. This operation uses an eventual consistency model, which means the system can take a few minutes to complete this operation. If you delete an OpsItem and immediately call, for example, GetOpsItem, the deleted OpsItem might still appear in the response. This operation is idempotent. The system doesn't throw an exception if you repeatedly call this operation for the same OpsItem. If the first call is successful, all additional calls return the same successful response as the first call. This operation doesn't support cross-account calls. A delegated administrator or management account can't delete OpsItems in other accounts, even if OpsCenter has been set up for cross-account administration. For more information about cross-account administration, see Setting up OpsCenter to centrally manage OpsItems across accounts in the Systems Manager User Guide.</td>
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
    defaultValue="get_ops_item"
    values={[
        { label: 'get_ops_item', value: 'get_ops_item' },
        { label: 'describe_ops_items', value: 'describe_ops_items' }
    ]}
>
<TabItem value="get_ops_item">

Get information about an OpsItem by using the ID. You must have permission in Identity and Access Management (IAM) to view information about an OpsItem. For more information, see Set up OpsCenter in the Amazon Web Services Systems Manager User Guide. Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see Amazon Web Services Systems Manager OpsCenter in the Amazon Web Services Systems Manager User Guide.

```sql
SELECT
actual_end_time,
actual_start_time,
category,
created_by,
created_time,
description,
last_modified_by,
last_modified_time,
notifications,
operational_data,
ops_item_arn,
ops_item_id,
ops_item_type,
planned_end_time,
planned_start_time,
priority,
related_ops_items,
severity,
source,
status,
title,
version
FROM aws.ssm.ops_items
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_ops_items">

Query a set of OpsItems. You must have permission in Identity and Access Management (IAM) to query a list of OpsItems. For more information, see Set up OpsCenter in the Amazon Web Services Systems Manager User Guide. Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see Amazon Web Services Systems Manager OpsCenter in the Amazon Web Services Systems Manager User Guide.

```sql
SELECT
actual_end_time,
actual_start_time,
category,
created_by,
created_time,
last_modified_by,
last_modified_time,
operational_data,
ops_item_id,
ops_item_type,
planned_end_time,
planned_start_time,
priority,
severity,
source,
status,
title
FROM aws.ssm.ops_items
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ops_item"
    values={[
        { label: 'create_ops_item', value: 'create_ops_item' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ops_item">

Creates a new OpsItem. You must have permission in Identity and Access Management (IAM) to create a new OpsItem. For more information, see Set up OpsCenter in the Amazon Web Services Systems Manager User Guide. Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see Amazon Web Services Systems Manager OpsCenter in the Amazon Web Services Systems Manager User Guide.

```sql
INSERT INTO aws.ssm.ops_items (
Description,
OpsItemType,
OperationalData,
Notifications,
Priority,
RelatedOpsItems,
Source,
Title,
Tags,
Category,
Severity,
ActualStartTime,
ActualEndTime,
PlannedStartTime,
PlannedEndTime,
AccountId,
region
)
SELECT 
'{{ Description }}' /* required */,
'{{ OpsItemType }}',
'{{ OperationalData }}',
'{{ Notifications }}',
{{ Priority }},
'{{ RelatedOpsItems }}',
'{{ Source }}',
'{{ Title }}',
'{{ Tags }}',
'{{ Category }}',
'{{ Severity }}',
'{{ ActualStartTime }}',
'{{ ActualEndTime }}',
'{{ PlannedStartTime }}',
'{{ PlannedEndTime }}',
'{{ AccountId }}',
'{{ region }}'
RETURNING
ops_item_arn,
ops_item_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ops_items
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ops_items resource.
    - name: Description
      value: "{{ Description }}"
      description: |
        User-defined text that contains information about the OpsItem, in Markdown format. Provide enough information so that users viewing this OpsItem for the first time understand the issue.
    - name: OpsItemType
      value: "{{ OpsItemType }}"
      description: |
        The type of OpsItem to create. Systems Manager supports the following types of OpsItems: /aws/issue This type of OpsItem is used for default OpsItems created by OpsCenter. /aws/insight This type of OpsItem is used by OpsCenter for aggregating and reporting on duplicate OpsItems. /aws/changerequest This type of OpsItem is used by Change Manager for reviewing and approving or rejecting change requests. Amazon Web Services Systems Manager Change Manager is no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services Systems Manager Change Manager availability change.
    - name: OperationalData
      value: "{{ OperationalData }}"
      description: |
        Operational data is custom data that provides useful reference details about the OpsItem. For example, you can specify log files, error strings, license keys, troubleshooting tips, or other relevant data. You enter operational data as key-value pairs. The key has a maximum length of 128 characters. The value has a maximum size of 20 KB. Operational data keys can't begin with the following: amazon, aws, amzn, ssm, /amazon, /aws, /amzn, /ssm. You can choose to make the data searchable by other users in the account or you can restrict search access. Searchable data means that all users with access to the OpsItem Overview page (as provided by the DescribeOpsItems API operation) can view and search on the specified data. Operational data that isn't searchable is only viewable by users who have access to the OpsItem (as provided by the GetOpsItem API operation). Use the /aws/resources key in OperationalData to specify a related resource in the request. Use the /aws/automations key in OperationalData to associate an Automation runbook with the OpsItem. To view Amazon Web Services CLI example commands that use these keys, see Create OpsItems manually in the Amazon Web Services Systems Manager User Guide.
    - name: Notifications
      description: |
        The Amazon Resource Name (ARN) of an SNS topic where notifications are sent when this OpsItem is edited or changed.
      value:
        - Arn: "{{ Arn }}"
    - name: Priority
      value: {{ Priority }}
      description: |
        The importance of this OpsItem in relation to other OpsItems in the system.
    - name: RelatedOpsItems
      description: |
        One or more OpsItems that share something in common with the current OpsItems. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource.
      value:
        - OpsItemId: "{{ OpsItemId }}"
    - name: Source
      value: "{{ Source }}"
      description: |
        The origin of the OpsItem, such as Amazon EC2 or Systems Manager. The source name can't contain the following strings: aws, amazon, and amzn.
    - name: Title
      value: "{{ Title }}"
      description: |
        A short heading that describes the nature of the OpsItem and the impacted resource.
    - name: Tags
      description: |
        Optional metadata that you assign to a resource. Tags use a key-value pair. For example: Key=Department,Value=Finance To add tags to a new OpsItem, a user must have IAM permissions for both the ssm:CreateOpsItems operation and the ssm:AddTagsToResource operation. To add tags to an existing OpsItem, use the AddTagsToResource operation.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: Category
      value: "{{ Category }}"
      description: |
        Specify a category to assign to an OpsItem.
    - name: Severity
      value: "{{ Severity }}"
      description: |
        Specify a severity to assign to an OpsItem.
    - name: ActualStartTime
      value: "{{ ActualStartTime }}"
      description: |
        The time a runbook workflow started. Currently reported only for the OpsItem type /aws/changerequest.
    - name: ActualEndTime
      value: "{{ ActualEndTime }}"
      description: |
        The time a runbook workflow ended. Currently reported only for the OpsItem type /aws/changerequest.
    - name: PlannedStartTime
      value: "{{ PlannedStartTime }}"
      description: |
        The time specified in a change request for a runbook workflow to start. Currently supported only for the OpsItem type /aws/changerequest.
    - name: PlannedEndTime
      value: "{{ PlannedEndTime }}"
      description: |
        The time specified in a change request for a runbook workflow to end. Currently supported only for the OpsItem type /aws/changerequest.
    - name: AccountId
      value: "{{ AccountId }}"
      description: |
        The target Amazon Web Services account where you want to create an OpsItem. To make this call, your account must be configured to work with OpsItems across accounts. For more information, see Set up OpsCenter in the Amazon Web Services Systems Manager User Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ops_item"
    values={[
        { label: 'update_ops_item', value: 'update_ops_item' }
    ]}
>
<TabItem value="update_ops_item">

Edit or change an OpsItem. You must have permission in Identity and Access Management (IAM) to update an OpsItem. For more information, see Set up OpsCenter in the Amazon Web Services Systems Manager User Guide. Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see Amazon Web Services Systems Manager OpsCenter in the Amazon Web Services Systems Manager User Guide.

```sql
UPDATE aws.ssm.ops_items
SET 
Description = '{{ Description }}',
OperationalData = '{{ OperationalData }}',
OperationalDataToDelete = '{{ OperationalDataToDelete }}',
Notifications = '{{ Notifications }}',
Priority = {{ Priority }},
RelatedOpsItems = '{{ RelatedOpsItems }}',
Status = '{{ Status }}',
OpsItemId = '{{ OpsItemId }}',
Title = '{{ Title }}',
Category = '{{ Category }}',
Severity = '{{ Severity }}',
ActualStartTime = '{{ ActualStartTime }}',
ActualEndTime = '{{ ActualEndTime }}',
PlannedStartTime = '{{ PlannedStartTime }}',
PlannedEndTime = '{{ PlannedEndTime }}',
OpsItemArn = '{{ OpsItemArn }}'
WHERE 
region = '{{ region }}' --required
AND OpsItemId = '{{ OpsItemId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ops_item"
    values={[
        { label: 'delete_ops_item', value: 'delete_ops_item' }
    ]}
>
<TabItem value="delete_ops_item">

Delete an OpsItem. You must have permission in Identity and Access Management (IAM) to delete an OpsItem. Note the following important information about this operation. Deleting an OpsItem is irreversible. You can't restore a deleted OpsItem. This operation uses an eventual consistency model, which means the system can take a few minutes to complete this operation. If you delete an OpsItem and immediately call, for example, GetOpsItem, the deleted OpsItem might still appear in the response. This operation is idempotent. The system doesn't throw an exception if you repeatedly call this operation for the same OpsItem. If the first call is successful, all additional calls return the same successful response as the first call. This operation doesn't support cross-account calls. A delegated administrator or management account can't delete OpsItems in other accounts, even if OpsCenter has been set up for cross-account administration. For more information about cross-account administration, see Setting up OpsCenter to centrally manage OpsItems across accounts in the Systems Manager User Guide.

```sql
DELETE FROM aws.ssm.ops_items
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
