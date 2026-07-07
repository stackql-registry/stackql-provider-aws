--- 
title: audit_findings
hide_title: false
hide_table_of_contents: false
keywords:
  - audit_findings
  - iot
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

Creates, updates, deletes, gets or lists an <code>audit_findings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="audit_findings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.audit_findings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_audit_finding"
    values={[
        { label: 'describe_audit_finding', value: 'describe_audit_finding' },
        { label: 'list_audit_findings', value: 'list_audit_findings' }
    ]}
>
<TabItem value="describe_audit_finding">

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
    <td><CopyableCode code="checkName" /></td>
    <td><code>string</code></td>
    <td>An audit check name. Checks must be enabled for your account. (Use DescribeAccountAuditConfiguration to see the list of all checks, including those that are enabled or use UpdateAccountAuditConfiguration to select which checks are enabled.)</td>
</tr>
<tr>
    <td><CopyableCode code="findingId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for this set of audit findings. This identifier is used to apply mitigation tasks to one or more sets of findings. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="findingTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the result (finding) was discovered.</td>
</tr>
<tr>
    <td><CopyableCode code="isSuppressed" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the audit finding was suppressed or not during reporting.</td>
</tr>
<tr>
    <td><CopyableCode code="nonCompliantResource" /></td>
    <td><code>object</code></td>
    <td>The resource that was found to be noncompliant with the audit check.</td>
</tr>
<tr>
    <td><CopyableCode code="reasonForNonCompliance" /></td>
    <td><code>string</code></td>
    <td>The reason the resource was noncompliant.</td>
</tr>
<tr>
    <td><CopyableCode code="reasonForNonComplianceCode" /></td>
    <td><code>string</code></td>
    <td>A code that indicates the reason that the resource was noncompliant.</td>
</tr>
<tr>
    <td><CopyableCode code="relatedResources" /></td>
    <td><code>array</code></td>
    <td>The list of related resources.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the result (finding). (CRITICAL, HIGH, MEDIUM, LOW)</td>
</tr>
<tr>
    <td><CopyableCode code="taskId" /></td>
    <td><code>string</code></td>
    <td>The ID of the audit that generated this result (finding). (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="taskStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the audit started.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_audit_findings">

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
    <td><CopyableCode code="checkName" /></td>
    <td><code>string</code></td>
    <td>An audit check name. Checks must be enabled for your account. (Use DescribeAccountAuditConfiguration to see the list of all checks, including those that are enabled or use UpdateAccountAuditConfiguration to select which checks are enabled.)</td>
</tr>
<tr>
    <td><CopyableCode code="findingId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for this set of audit findings. This identifier is used to apply mitigation tasks to one or more sets of findings. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="findingTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the result (finding) was discovered.</td>
</tr>
<tr>
    <td><CopyableCode code="isSuppressed" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the audit finding was suppressed or not during reporting.</td>
</tr>
<tr>
    <td><CopyableCode code="nonCompliantResource" /></td>
    <td><code>object</code></td>
    <td>The resource that was found to be noncompliant with the audit check.</td>
</tr>
<tr>
    <td><CopyableCode code="reasonForNonCompliance" /></td>
    <td><code>string</code></td>
    <td>The reason the resource was noncompliant.</td>
</tr>
<tr>
    <td><CopyableCode code="reasonForNonComplianceCode" /></td>
    <td><code>string</code></td>
    <td>A code that indicates the reason that the resource was noncompliant.</td>
</tr>
<tr>
    <td><CopyableCode code="relatedResources" /></td>
    <td><code>array</code></td>
    <td>The list of related resources.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the result (finding). (CRITICAL, HIGH, MEDIUM, LOW)</td>
</tr>
<tr>
    <td><CopyableCode code="taskId" /></td>
    <td><code>string</code></td>
    <td>The ID of the audit that generated this result (finding). (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="taskStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the audit started.</td>
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
    <td><a href="#describe_audit_finding"><CopyableCode code="describe_audit_finding" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-finding_id"><code>finding_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a single audit finding. Properties include the reason for noncompliance, the severity of the issue, and the start time when the audit that returned the finding. Requires permission to access the DescribeAuditFinding action.</td>
</tr>
<tr>
    <td><a href="#list_audit_findings"><CopyableCode code="list_audit_findings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the findings (results) of a Device Defender audit or of the audits performed during a specified time period. (Findings are retained for 90 days.) Requires permission to access the ListAuditFindings action.</td>
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
<tr id="parameter-finding_id">
    <td><CopyableCode code="finding_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a single audit finding. You can use this identifier to apply mitigation actions to the finding.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_audit_finding"
    values={[
        { label: 'describe_audit_finding', value: 'describe_audit_finding' },
        { label: 'list_audit_findings', value: 'list_audit_findings' }
    ]}
>
<TabItem value="describe_audit_finding">

Gets information about a single audit finding. Properties include the reason for noncompliance, the severity of the issue, and the start time when the audit that returned the finding. Requires permission to access the DescribeAuditFinding action.

```sql
SELECT
checkName,
findingId,
findingTime,
isSuppressed,
nonCompliantResource,
reasonForNonCompliance,
reasonForNonComplianceCode,
relatedResources,
severity,
taskId,
taskStartTime
FROM aws.iot.audit_findings
WHERE finding_id = '{{ finding_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_audit_findings">

Lists the findings (results) of a Device Defender audit or of the audits performed during a specified time period. (Findings are retained for 90 days.) Requires permission to access the ListAuditFindings action.

```sql
SELECT
checkName,
findingId,
findingTime,
isSuppressed,
nonCompliantResource,
reasonForNonCompliance,
reasonForNonComplianceCode,
relatedResources,
severity,
taskId,
taskStartTime
FROM aws.iot.audit_findings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
