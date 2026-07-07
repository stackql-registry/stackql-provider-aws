--- 
title: lending_analysis_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - lending_analysis_summaries
  - textract
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

Creates, updates, deletes, gets or lists a <code>lending_analysis_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lending_analysis_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.textract.lending_analysis_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_lending_analysis_summary"
    values={[
        { label: 'get_lending_analysis_summary', value: 'get_lending_analysis_summary' }
    ]}
>
<TabItem value="get_lending_analysis_summary">

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
    <td><CopyableCode code="AnalyzeLendingModelVersion" /></td>
    <td><code>string</code></td>
    <td>The current model version of the Analyze Lending API.</td>
</tr>
<tr>
    <td><CopyableCode code="DocumentMetadata" /></td>
    <td><code>object</code></td>
    <td>Information about the input document.</td>
</tr>
<tr>
    <td><CopyableCode code="JobStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the lending analysis job. (IN_PROGRESS, SUCCEEDED, FAILED, PARTIAL_SUCCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>Returns if the lending analysis could not be completed. Contains explanation for what error occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="Summary" /></td>
    <td><code>object</code></td>
    <td>Contains summary information for documents grouped by type.</td>
</tr>
<tr>
    <td><CopyableCode code="Warnings" /></td>
    <td><code>array</code></td>
    <td>A list of warnings that occurred during the lending analysis operation.</td>
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
    <td><a href="#get_lending_analysis_summary"><CopyableCode code="get_lending_analysis_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets summarized results for the StartLendingAnalysis operation, which analyzes text in a lending document. The returned summary consists of information about documents grouped together by a common document type. Information like detected signatures, page numbers, and split documents is returned with respect to the type of grouped document. You start asynchronous text analysis by calling StartLendingAnalysis, which returns a job identifier (JobId). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to StartLendingAnalysis. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetLendingAnalysisSummary, and pass the job identifier (JobId) from the initial call to StartLendingAnalysis.</td>
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
    defaultValue="get_lending_analysis_summary"
    values={[
        { label: 'get_lending_analysis_summary', value: 'get_lending_analysis_summary' }
    ]}
>
<TabItem value="get_lending_analysis_summary">

Gets summarized results for the StartLendingAnalysis operation, which analyzes text in a lending document. The returned summary consists of information about documents grouped together by a common document type. Information like detected signatures, page numbers, and split documents is returned with respect to the type of grouped document. You start asynchronous text analysis by calling StartLendingAnalysis, which returns a job identifier (JobId). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to StartLendingAnalysis. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetLendingAnalysisSummary, and pass the job identifier (JobId) from the initial call to StartLendingAnalysis.

```sql
SELECT
AnalyzeLendingModelVersion,
DocumentMetadata,
JobStatus,
StatusMessage,
Summary,
Warnings
FROM aws.textract.lending_analysis_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
