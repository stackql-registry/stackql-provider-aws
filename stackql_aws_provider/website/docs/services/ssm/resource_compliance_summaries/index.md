--- 
title: resource_compliance_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_compliance_summaries
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

Creates, updates, deletes, gets or lists a <code>resource_compliance_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_compliance_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.resource_compliance_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resource_compliance_summaries"
    values={[
        { label: 'list_resource_compliance_summaries', value: 'list_resource_compliance_summaries' }
    ]}
>
<TabItem value="list_resource_compliance_summaries">

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
    <td>The compliance type. (pattern: &lt;code&gt;&#91;A-Za-z0-9_\-&#93;\w+|Custom:&#91;a-zA-Z0-9_\-&#93;\w+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compliant_summary" /></td>
    <td><code>object</code></td>
    <td>A list of items that are compliant for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_summary" /></td>
    <td><code>object</code></td>
    <td>Information about the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="non_compliant_summary" /></td>
    <td><code>object</code></td>
    <td>A list of items that aren't compliant for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="overall_severity" /></td>
    <td><code>string</code></td>
    <td>The highest severity item found for the resource. The resource is compliant for this item. (CRITICAL, HIGH, MEDIUM, LOW, INFORMATIONAL, UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The resource ID.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The compliance status for the resource. (COMPLIANT, NON_COMPLIANT)</td>
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
    <td><a href="#list_resource_compliance_summaries"><CopyableCode code="list_resource_compliance_summaries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a resource-level summary count. The summary includes information about compliant and non-compliant statuses and detailed compliance-item severity counts, according to the filter criteria you specify.</td>
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
    defaultValue="list_resource_compliance_summaries"
    values={[
        { label: 'list_resource_compliance_summaries', value: 'list_resource_compliance_summaries' }
    ]}
>
<TabItem value="list_resource_compliance_summaries">

Returns a resource-level summary count. The summary includes information about compliant and non-compliant statuses and detailed compliance-item severity counts, according to the filter criteria you specify.

```sql
SELECT
compliance_type,
compliant_summary,
execution_summary,
non_compliant_summary,
overall_severity,
resource_id,
resource_type,
status
FROM aws.ssm.resource_compliance_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
