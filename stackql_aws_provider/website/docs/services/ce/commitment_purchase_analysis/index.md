--- 
title: commitment_purchase_analysis
hide_title: false
hide_table_of_contents: false
keywords:
  - commitment_purchase_analysis
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

Creates, updates, deletes, gets or lists a <code>commitment_purchase_analysis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="commitment_purchase_analysis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.commitment_purchase_analysis" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_commitment_purchase_analysis"
    values={[
        { label: 'get_commitment_purchase_analysis', value: 'get_commitment_purchase_analysis' }
    ]}
>
<TabItem value="get_commitment_purchase_analysis">

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
    <td><CopyableCode code="AnalysisCompletionTime" /></td>
    <td><code>string</code></td>
    <td>The completion time of the analysis. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d\d-\d\dT\d\d:\d\d:\d\d((&#91;+-&#93;\d\d:\d\d)|Z)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AnalysisDetails" /></td>
    <td><code>object</code></td>
    <td>Details about the analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="AnalysisId" /></td>
    <td><code>string</code></td>
    <td>The analysis ID that's associated with the commitment purchase analysis. (pattern: &lt;code&gt;^&#91;\S\s&#93;&#123;8&#125;-&#91;\S\s&#93;&#123;4&#125;-&#91;\S\s&#93;&#123;4&#125;-&#91;\S\s&#93;&#123;4&#125;-&#91;\S\s&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AnalysisStartedTime" /></td>
    <td><code>string</code></td>
    <td>The start time of the analysis. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d\d-\d\dT\d\d:\d\d:\d\d((&#91;+-&#93;\d\d:\d\d)|Z)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AnalysisStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the analysis. (SUCCEEDED, PROCESSING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="CommitmentPurchaseAnalysisConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration for the commitment purchase analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorCode" /></td>
    <td><code>string</code></td>
    <td>The error code used for the analysis. (NO_USAGE_FOUND, INTERNAL_FAILURE, INVALID_SAVINGS_PLANS_TO_ADD, INVALID_SAVINGS_PLANS_TO_EXCLUDE, INVALID_ACCOUNT_ID)</td>
</tr>
<tr>
    <td><CopyableCode code="EstimatedCompletionTime" /></td>
    <td><code>string</code></td>
    <td>The estimated time for when the analysis will complete. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d\d-\d\dT\d\d:\d\d:\d\d((&#91;+-&#93;\d\d:\d\d)|Z)$&lt;/code&gt;)</td>
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
    <td><a href="#get_commitment_purchase_analysis"><CopyableCode code="get_commitment_purchase_analysis" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a commitment purchase analysis result based on the AnalysisId.</td>
</tr>
<tr>
    <td><a href="#start_commitment_purchase_analysis"><CopyableCode code="start_commitment_purchase_analysis" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CommitmentPurchaseAnalysisConfiguration"><code>CommitmentPurchaseAnalysisConfiguration</code></a></td>
    <td></td>
    <td>Specifies the parameters of a planned commitment purchase and starts the generation of the analysis. This enables you to estimate the cost, coverage, and utilization impact of your planned commitment purchases.</td>
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
    defaultValue="get_commitment_purchase_analysis"
    values={[
        { label: 'get_commitment_purchase_analysis', value: 'get_commitment_purchase_analysis' }
    ]}
>
<TabItem value="get_commitment_purchase_analysis">

Retrieves a commitment purchase analysis result based on the AnalysisId.

```sql
SELECT
AnalysisCompletionTime,
AnalysisDetails,
AnalysisId,
AnalysisStartedTime,
AnalysisStatus,
CommitmentPurchaseAnalysisConfiguration,
ErrorCode,
EstimatedCompletionTime
FROM aws.ce.commitment_purchase_analysis
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_commitment_purchase_analysis"
    values={[
        { label: 'start_commitment_purchase_analysis', value: 'start_commitment_purchase_analysis' }
    ]}
>
<TabItem value="start_commitment_purchase_analysis">

Specifies the parameters of a planned commitment purchase and starts the generation of the analysis. This enables you to estimate the cost, coverage, and utilization impact of your planned commitment purchases.

```sql
EXEC aws.ce.commitment_purchase_analysis.start_commitment_purchase_analysis 
@region='{{ region }}' --required 
@@json=
'{
"CommitmentPurchaseAnalysisConfiguration": "{{ CommitmentPurchaseAnalysisConfiguration }}"
}'
;
```
</TabItem>
</Tabs>
