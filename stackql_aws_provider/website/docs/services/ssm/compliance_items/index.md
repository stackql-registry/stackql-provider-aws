--- 
title: compliance_items
hide_title: false
hide_table_of_contents: false
keywords:
  - compliance_items
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

Creates, updates, deletes, gets or lists a <code>compliance_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compliance_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.compliance_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_compliance_items"
    values={[
        { label: 'list_compliance_items', value: 'list_compliance_items' }
    ]}
>
<TabItem value="list_compliance_items">

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
    <td><CopyableCode code="compliance_type" /></td>
    <td><code>string</code></td>
    <td>The compliance type. For example, Association (for a State Manager association), Patch, or Custom:string are all valid compliance types. (pattern: &lt;code&gt;&#91;A-Za-z0-9_\-&#93;\w+|Custom:&#91;a-zA-Z0-9_\-&#93;\w+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>object</code></td>
    <td>A "Key": "Value" tag combination for the compliance item.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_summary" /></td>
    <td><code>object</code></td>
    <td>A summary for the compliance item. The summary includes an execution ID, the execution type (for example, command), and the execution time. For State Manager associations, the ExecutionTime value represents when the compliance status was captured and aggregated by the Systems Manager service, not necessarily when the underlying association was executed on the managed node. State Manager updates compliance status for all associations on an instance whenever any association executes, which means multiple associations may show the same execution time even if they were executed at different times.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>An ID for the compliance item. For example, if the compliance item is a Windows patch, the ID could be the number of the KB article; for example: KB4010320.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>An ID for the resource. For a managed node, this is the node ID.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource. ManagedInstance is currently the only supported resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the compliance status. Severity can be one of the following: Critical, High, Medium, Low, Informational, Unspecified. (CRITICAL, HIGH, MEDIUM, LOW, INFORMATIONAL, UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the compliance item. An item is either COMPLIANT, NON_COMPLIANT, or an empty string (for Windows patches that aren't applicable). (COMPLIANT, NON_COMPLIANT)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>A title for the compliance item. For example, if the compliance item is a Windows patch, the title could be the title of the KB article for the patch; for example: Security Update for Active Directory Federation Services.</td>
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
    <td><a href="#list_compliance_items"><CopyableCode code="list_compliance_items" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>For a specified resource ID, this API operation returns a list of compliance statuses for different resource types. Currently, you can only specify one resource ID per call. List results depend on the criteria specified in the filter.</td>
</tr>
<tr>
    <td><a href="#put_compliance_items"><CopyableCode code="put_compliance_items" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-ComplianceType"><code>ComplianceType</code></a>, <a href="#parameter-ExecutionSummary"><code>ExecutionSummary</code></a>, <a href="#parameter-Items"><code>Items</code></a></td>
    <td></td>
    <td>Registers a compliance type and other compliance details on a designated resource. This operation lets you register custom compliance details with a resource. This call overwrites existing compliance information on the resource, so you must provide a full list of compliance items each time that you send the request. ComplianceType can be one of the following: ExecutionId: The execution ID when the patch, association, or custom compliance item was applied. ExecutionType: Specify patch, association, or Custom:string. ExecutionTime. The time the patch, association, or custom compliance item was applied to the managed node. For State Manager associations, this represents the time when compliance status was captured by the Systems Manager service during its internal compliance aggregation workflow, not necessarily when the association was executed on the managed node. State Manager updates compliance information for all associations on an instance whenever any association executes, which may result in multiple associations showing the same execution time. Id: The patch, association, or custom compliance ID. Title: A title. Status: The status of the compliance item. For example, approved for patches, or Failed for associations. Severity: A patch severity. For example, Critical. DocumentName: An SSM document name. For example, AWS-RunPatchBaseline. DocumentVersion: An SSM document version number. For example, 4. Classification: A patch classification. For example, security updates. PatchBaselineId: A patch baseline ID. PatchSeverity: A patch severity. For example, Critical. PatchState: A patch state. For example, InstancesWithFailedPatches. PatchGroup: The name of a patch group. InstalledTime: The time the association, patch, or custom compliance item was applied to the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'</td>
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
    defaultValue="list_compliance_items"
    values={[
        { label: 'list_compliance_items', value: 'list_compliance_items' }
    ]}
>
<TabItem value="list_compliance_items">

For a specified resource ID, this API operation returns a list of compliance statuses for different resource types. Currently, you can only specify one resource ID per call. List results depend on the criteria specified in the filter.

```sql
SELECT
compliance_type,
details,
execution_summary,
id,
resource_id,
resource_type,
severity,
status,
title
FROM aws.ssm.compliance_items
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_compliance_items"
    values={[
        { label: 'put_compliance_items', value: 'put_compliance_items' }
    ]}
>
<TabItem value="put_compliance_items">

Registers a compliance type and other compliance details on a designated resource. This operation lets you register custom compliance details with a resource. This call overwrites existing compliance information on the resource, so you must provide a full list of compliance items each time that you send the request. ComplianceType can be one of the following: ExecutionId: The execution ID when the patch, association, or custom compliance item was applied. ExecutionType: Specify patch, association, or Custom:string. ExecutionTime. The time the patch, association, or custom compliance item was applied to the managed node. For State Manager associations, this represents the time when compliance status was captured by the Systems Manager service during its internal compliance aggregation workflow, not necessarily when the association was executed on the managed node. State Manager updates compliance information for all associations on an instance whenever any association executes, which may result in multiple associations showing the same execution time. Id: The patch, association, or custom compliance ID. Title: A title. Status: The status of the compliance item. For example, approved for patches, or Failed for associations. Severity: A patch severity. For example, Critical. DocumentName: An SSM document name. For example, AWS-RunPatchBaseline. DocumentVersion: An SSM document version number. For example, 4. Classification: A patch classification. For example, security updates. PatchBaselineId: A patch baseline ID. PatchSeverity: A patch severity. For example, Critical. PatchState: A patch state. For example, InstancesWithFailedPatches. PatchGroup: The name of a patch group. InstalledTime: The time the association, patch, or custom compliance item was applied to the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'

```sql
REPLACE aws.ssm.compliance_items
SET 
ResourceId = '{{ ResourceId }}',
ResourceType = '{{ ResourceType }}',
ComplianceType = '{{ ComplianceType }}',
ExecutionSummary = '{{ ExecutionSummary }}',
Items = '{{ Items }}',
ItemContentHash = '{{ ItemContentHash }}',
UploadType = '{{ UploadType }}'
WHERE 
region = '{{ region }}' --required
AND ResourceId = '{{ ResourceId }}' --required
AND ResourceType = '{{ ResourceType }}' --required
AND ComplianceType = '{{ ComplianceType }}' --required
AND ExecutionSummary = '{{ ExecutionSummary }}' --required
AND Items = '{{ Items }}' --required;
```
</TabItem>
</Tabs>
