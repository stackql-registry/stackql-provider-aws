--- 
title: aggregate_conformance_pack_compliance_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - aggregate_conformance_pack_compliance_summaries
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

Creates, updates, deletes, gets or lists an <code>aggregate_conformance_pack_compliance_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aggregate_conformance_pack_compliance_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.aggregate_conformance_pack_compliance_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_aggregate_conformance_pack_compliance_summary"
    values={[
        { label: 'get_aggregate_conformance_pack_compliance_summary', value: 'get_aggregate_conformance_pack_compliance_summary' }
    ]}
>
<TabItem value="get_aggregate_conformance_pack_compliance_summary">

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
    <td><CopyableCode code="aggregate_conformance_pack_compliance_summaries" /></td>
    <td><code>array</code></td>
    <td>Returns a list of AggregateConformancePackComplianceSummary object.</td>
</tr>
<tr>
    <td><CopyableCode code="group_by_key" /></td>
    <td><code>string</code></td>
    <td>Groups the result based on Amazon Web Services account ID or Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</td>
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
    <td><a href="#get_aggregate_conformance_pack_compliance_summary"><CopyableCode code="get_aggregate_conformance_pack_compliance_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the count of compliant and noncompliant conformance packs across all Amazon Web Services accounts and Amazon Web Services Regions in an aggregator. You can filter based on Amazon Web Services account ID or Amazon Web Services Region. The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</td>
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
    defaultValue="get_aggregate_conformance_pack_compliance_summary"
    values={[
        { label: 'get_aggregate_conformance_pack_compliance_summary', value: 'get_aggregate_conformance_pack_compliance_summary' }
    ]}
>
<TabItem value="get_aggregate_conformance_pack_compliance_summary">

Returns the count of compliant and noncompliant conformance packs across all Amazon Web Services accounts and Amazon Web Services Regions in an aggregator. You can filter based on Amazon Web Services account ID or Amazon Web Services Region. The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.

```sql
SELECT
aggregate_conformance_pack_compliance_summaries,
group_by_key,
next_token
FROM aws.config.aggregate_conformance_pack_compliance_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
