--- 
title: compliance_status
hide_title: false
hide_table_of_contents: false
keywords:
  - compliance_status
  - fms
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

Creates, updates, deletes, gets or lists a <code>compliance_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compliance_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fms.compliance_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_compliance_status"
    values={[
        { label: 'list_compliance_status', value: 'list_compliance_status' }
    ]}
>
<TabItem value="list_compliance_status">

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
    <td><CopyableCode code="EvaluationResults" /></td>
    <td><code>array</code></td>
    <td>An array of EvaluationResult objects.</td>
</tr>
<tr>
    <td><CopyableCode code="IssueInfoMap" /></td>
    <td><code>object</code></td>
    <td>Details about problems with dependent services, such as WAF or Config, and the error message received that indicates the problem with the service.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of the last update to the EvaluationResult objects.</td>
</tr>
<tr>
    <td><CopyableCode code="MemberAccount" /></td>
    <td><code>string</code></td>
    <td>The member account ID. (pattern: &lt;code&gt;^&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Firewall Manager policy. (pattern: &lt;code&gt;^&#91;a-z0-9A-Z-&#93;&#123;36&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyName" /></td>
    <td><code>string</code></td>
    <td>The name of the Firewall Manager policy. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyOwner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account that created the Firewall Manager policy. (pattern: &lt;code&gt;^&#91;0-9&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#list_compliance_status"><CopyableCode code="list_compliance_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of PolicyComplianceStatus objects. Use PolicyComplianceStatus to get a summary of which member accounts are protected by the specified policy.</td>
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
    defaultValue="list_compliance_status"
    values={[
        { label: 'list_compliance_status', value: 'list_compliance_status' }
    ]}
>
<TabItem value="list_compliance_status">

Returns an array of PolicyComplianceStatus objects. Use PolicyComplianceStatus to get a summary of which member accounts are protected by the specified policy.

```sql
SELECT
EvaluationResults,
IssueInfoMap,
LastUpdated,
MemberAccount,
PolicyId,
PolicyName,
PolicyOwner
FROM aws.fms.compliance_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
