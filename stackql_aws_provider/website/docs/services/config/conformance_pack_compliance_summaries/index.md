--- 
title: conformance_pack_compliance_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - conformance_pack_compliance_summaries
  - config
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

Creates, updates, deletes, gets or lists a <code>conformance_pack_compliance_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="conformance_pack_compliance_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.conformance_pack_compliance_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_conformance_pack_compliance_summary"
    values={[
        { label: 'get_conformance_pack_compliance_summary', value: 'get_conformance_pack_compliance_summary' }
    ]}
>
<TabItem value="get_conformance_pack_compliance_summary">

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
    <td><CopyableCode code="ConformancePackComplianceStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the conformance pack. (COMPLIANT, NON_COMPLIANT, INSUFFICIENT_DATA)</td>
</tr>
<tr>
    <td><CopyableCode code="ConformancePackName" /></td>
    <td><code>string</code></td>
    <td>The name of the conformance pack name. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;-a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_conformance_pack_compliance_summary"><CopyableCode code="get_conformance_pack_compliance_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.</td>
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
    defaultValue="get_conformance_pack_compliance_summary"
    values={[
        { label: 'get_conformance_pack_compliance_summary', value: 'get_conformance_pack_compliance_summary' }
    ]}
>
<TabItem value="get_conformance_pack_compliance_summary">

Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.

```sql
SELECT
ConformancePackComplianceStatus,
ConformancePackName
FROM aws.config.conformance_pack_compliance_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
