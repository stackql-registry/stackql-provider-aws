--- 
title: lending_analysis
hide_title: false
hide_table_of_contents: false
keywords:
  - lending_analysis
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

Creates, updates, deletes, gets or lists a <code>lending_analysis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lending_analysis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.textract.lending_analysis" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_lending_analysis"
    values={[
        { label: 'get_lending_analysis', value: 'get_lending_analysis' }
    ]}
>
<TabItem value="get_lending_analysis">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If the response is truncated, Amazon Textract returns this token. You can use this token in the subsequent request to retrieve the next set of lending results. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Results" /></td>
    <td><code>array</code></td>
    <td>Holds the information returned by one of AmazonTextract's document analysis operations for the pinstripe.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>Returns if the lending analysis job could not be completed. Contains explanation for what error occurred.</td>
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
    <td><a href="#get_lending_analysis"><CopyableCode code="get_lending_analysis" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a lending document. You start asynchronous text analysis by calling StartLendingAnalysis, which returns a job identifier (JobId). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to StartLendingAnalysis. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetLendingAnalysis, and pass the job identifier (JobId) from the initial call to StartLendingAnalysis.</td>
</tr>
<tr>
    <td><a href="#start_lending_analysis"><CopyableCode code="start_lending_analysis" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DocumentLocation"><code>DocumentLocation</code></a></td>
    <td></td>
    <td>Starts the classification and analysis of an input document. StartLendingAnalysis initiates the classification and analysis of a packet of lending documents. StartLendingAnalysis operates on a document file located in an Amazon S3 bucket. StartLendingAnalysis can analyze text in documents that are in one of the following formats: JPEG, PNG, TIFF, PDF. Use DocumentLocation to specify the bucket name and the file name of the document. StartLendingAnalysis returns a job identifier (JobId) that you use to get the results of the operation. When the text analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in NotificationChannel. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If the status is SUCCEEDED you can call either GetLendingAnalysis or GetLendingAnalysisSummary and provide the JobId to obtain the results of the analysis. If using OutputConfig to specify an Amazon S3 bucket, the output will be contained within the specified prefix in a directory labeled with the job-id. In the directory there are 3 sub-directories: detailedResponse (contains the GetLendingAnalysis response) summaryResponse (for the GetLendingAnalysisSummary response) splitDocuments (documents split across logical boundaries)</td>
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
    defaultValue="get_lending_analysis"
    values={[
        { label: 'get_lending_analysis', value: 'get_lending_analysis' }
    ]}
>
<TabItem value="get_lending_analysis">

Gets the results for an Amazon Textract asynchronous operation that analyzes text in a lending document. You start asynchronous text analysis by calling StartLendingAnalysis, which returns a job identifier (JobId). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to StartLendingAnalysis. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetLendingAnalysis, and pass the job identifier (JobId) from the initial call to StartLendingAnalysis.

```sql
SELECT
AnalyzeLendingModelVersion,
DocumentMetadata,
JobStatus,
NextToken,
Results,
StatusMessage,
Warnings
FROM aws.textract.lending_analysis
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_lending_analysis"
    values={[
        { label: 'start_lending_analysis', value: 'start_lending_analysis' }
    ]}
>
<TabItem value="start_lending_analysis">

Starts the classification and analysis of an input document. StartLendingAnalysis initiates the classification and analysis of a packet of lending documents. StartLendingAnalysis operates on a document file located in an Amazon S3 bucket. StartLendingAnalysis can analyze text in documents that are in one of the following formats: JPEG, PNG, TIFF, PDF. Use DocumentLocation to specify the bucket name and the file name of the document. StartLendingAnalysis returns a job identifier (JobId) that you use to get the results of the operation. When the text analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in NotificationChannel. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If the status is SUCCEEDED you can call either GetLendingAnalysis or GetLendingAnalysisSummary and provide the JobId to obtain the results of the analysis. If using OutputConfig to specify an Amazon S3 bucket, the output will be contained within the specified prefix in a directory labeled with the job-id. In the directory there are 3 sub-directories: detailedResponse (contains the GetLendingAnalysis response) summaryResponse (for the GetLendingAnalysisSummary response) splitDocuments (documents split across logical boundaries)

```sql
EXEC aws.textract.lending_analysis.start_lending_analysis 
@region='{{ region }}' --required 
@@json=
'{
"DocumentLocation": "{{ DocumentLocation }}", 
"ClientRequestToken": "{{ ClientRequestToken }}", 
"JobTag": "{{ JobTag }}", 
"NotificationChannel": "{{ NotificationChannel }}", 
"OutputConfig": "{{ OutputConfig }}", 
"KMSKeyId": "{{ KMSKeyId }}"
}'
;
```
</TabItem>
</Tabs>
