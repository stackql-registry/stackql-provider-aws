--- 
title: commitment_purchase_analyses
hide_title: false
hide_table_of_contents: false
keywords:
  - commitment_purchase_analyses
  - ce
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

Creates, updates, deletes, gets or lists a <code>commitment_purchase_analyses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="commitment_purchase_analyses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.commitment_purchase_analyses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_commitment_purchase_analyses"
    values={[
        { label: 'list_commitment_purchase_analyses', value: 'list_commitment_purchase_analyses' }
    ]}
>
<TabItem value="list_commitment_purchase_analyses">

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
    <td><CopyableCode code="analysis_completion_time" /></td>
    <td><code>string</code></td>
    <td>The period of time that you want the usage and costs for. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d\d-\d\dT\d\d:\d\d:\d\d((&#91;+-&#93;\d\d:\d\d)|Z)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="analysis_id" /></td>
    <td><code>string</code></td>
    <td>The analysis ID that's associated with the commitment purchase analysis. (pattern: &lt;code&gt;^&#91;\S\s&#93;&#123;8&#125;-&#91;\S\s&#93;&#123;4&#125;-&#91;\S\s&#93;&#123;4&#125;-&#91;\S\s&#93;&#123;4&#125;-&#91;\S\s&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="analysis_started_time" /></td>
    <td><code>string</code></td>
    <td>The period of time that you want the usage and costs for. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d\d-\d\dT\d\d:\d\d:\d\d((&#91;+-&#93;\d\d:\d\d)|Z)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="analysis_status" /></td>
    <td><code>string</code></td>
    <td>The status of the analysis. (SUCCEEDED, PROCESSING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="commitment_purchase_analysis_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for the commitment purchase analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>The error code used for the analysis. (NO_USAGE_FOUND, INTERNAL_FAILURE, INVALID_SAVINGS_PLANS_TO_ADD, INVALID_SAVINGS_PLANS_TO_EXCLUDE, INVALID_ACCOUNT_ID)</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_completion_time" /></td>
    <td><code>string</code></td>
    <td>The period of time that you want the usage and costs for. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d\d-\d\dT\d\d:\d\d:\d\d((&#91;+-&#93;\d\d:\d\d)|Z)$&lt;/code&gt;)</td>
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
    <td><a href="#list_commitment_purchase_analyses"><CopyableCode code="list_commitment_purchase_analyses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the commitment purchase analyses for your account.</td>
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
    defaultValue="list_commitment_purchase_analyses"
    values={[
        { label: 'list_commitment_purchase_analyses', value: 'list_commitment_purchase_analyses' }
    ]}
>
<TabItem value="list_commitment_purchase_analyses">

Lists the commitment purchase analyses for your account.

```sql
SELECT
analysis_completion_time,
analysis_id,
analysis_started_time,
analysis_status,
commitment_purchase_analysis_configuration,
error_code,
estimated_completion_time
FROM aws.ce.commitment_purchase_analyses
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
