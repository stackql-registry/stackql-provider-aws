--- 
title: expense_analysis
hide_title: false
hide_table_of_contents: false
keywords:
  - expense_analysis
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

Creates, updates, deletes, gets or lists an <code>expense_analysis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="expense_analysis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.textract.expense_analysis" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_expense_analysis"
    values={[
        { label: 'get_expense_analysis', value: 'get_expense_analysis' }
    ]}
>
<TabItem value="get_expense_analysis">

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
    <td><CopyableCode code="AnalyzeExpenseModelVersion" /></td>
    <td><code>string</code></td>
    <td>The current model version of AnalyzeExpense.</td>
</tr>
<tr>
    <td><CopyableCode code="DocumentMetadata" /></td>
    <td><code>object</code></td>
    <td>Information about the input document.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpenseDocuments" /></td>
    <td><code>array</code></td>
    <td>The expenses detected by Amazon Textract.</td>
</tr>
<tr>
    <td><CopyableCode code="JobStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the text detection job. (IN_PROGRESS, SUCCEEDED, FAILED, PARTIAL_SUCCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If the response is truncated, Amazon Textract returns this token. You can use this token in the subsequent request to retrieve the next set of text-detection results. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>Returns if the detection job could not be completed. Contains explanation for what error occured.</td>
</tr>
<tr>
    <td><CopyableCode code="Warnings" /></td>
    <td><code>array</code></td>
    <td>A list of warnings that occurred during the text-detection operation for the document.</td>
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
    <td><a href="#get_expense_analysis"><CopyableCode code="get_expense_analysis" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the results for an Amazon Textract asynchronous operation that analyzes invoices and receipts. Amazon Textract finds contact information, items purchased, and vendor name, from input invoices and receipts. You start asynchronous invoice/receipt analysis by calling StartExpenseAnalysis, which returns a job identifier (JobId). Upon completion of the invoice/receipt analysis, Amazon Textract publishes the completion status to the Amazon Simple Notification Service (Amazon SNS) topic. This topic must be registered in the initial call to StartExpenseAnalysis. To get the results of the invoice/receipt analysis operation, first ensure that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetExpenseAnalysis, and pass the job identifier (JobId) from the initial call to StartExpenseAnalysis. Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in MaxResults, the value of NextToken in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call GetExpenseAnalysis, and populate the NextToken request parameter with the token value that's returned from the previous call to GetExpenseAnalysis. For more information, see Analyzing Invoices and Receipts.</td>
</tr>
<tr>
    <td><a href="#start_expense_analysis"><CopyableCode code="start_expense_analysis" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DocumentLocation"><code>DocumentLocation</code></a></td>
    <td></td>
    <td>Starts the asynchronous analysis of invoices or receipts for data like contact information, items purchased, and vendor names. StartExpenseAnalysis can analyze text in documents that are in JPEG, PNG, and PDF format. The documents must be stored in an Amazon S3 bucket. Use the DocumentLocation parameter to specify the name of your S3 bucket and the name of the document in that bucket. StartExpenseAnalysis returns a job identifier (JobId) that you will provide to GetExpenseAnalysis to retrieve the results of the operation. When the analysis of the input invoices/receipts is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you provide to the NotificationChannel. To obtain the results of the invoice and receipt analysis operation, ensure that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetExpenseAnalysis, and pass the job identifier (JobId) that was returned by your call to StartExpenseAnalysis. For more information, see Analyzing Invoices and Receipts.</td>
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
    defaultValue="get_expense_analysis"
    values={[
        { label: 'get_expense_analysis', value: 'get_expense_analysis' }
    ]}
>
<TabItem value="get_expense_analysis">

Gets the results for an Amazon Textract asynchronous operation that analyzes invoices and receipts. Amazon Textract finds contact information, items purchased, and vendor name, from input invoices and receipts. You start asynchronous invoice/receipt analysis by calling StartExpenseAnalysis, which returns a job identifier (JobId). Upon completion of the invoice/receipt analysis, Amazon Textract publishes the completion status to the Amazon Simple Notification Service (Amazon SNS) topic. This topic must be registered in the initial call to StartExpenseAnalysis. To get the results of the invoice/receipt analysis operation, first ensure that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetExpenseAnalysis, and pass the job identifier (JobId) from the initial call to StartExpenseAnalysis. Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in MaxResults, the value of NextToken in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call GetExpenseAnalysis, and populate the NextToken request parameter with the token value that's returned from the previous call to GetExpenseAnalysis. For more information, see Analyzing Invoices and Receipts.

```sql
SELECT
AnalyzeExpenseModelVersion,
DocumentMetadata,
ExpenseDocuments,
JobStatus,
NextToken,
StatusMessage,
Warnings
FROM aws.textract.expense_analysis
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_expense_analysis"
    values={[
        { label: 'start_expense_analysis', value: 'start_expense_analysis' }
    ]}
>
<TabItem value="start_expense_analysis">

Starts the asynchronous analysis of invoices or receipts for data like contact information, items purchased, and vendor names. StartExpenseAnalysis can analyze text in documents that are in JPEG, PNG, and PDF format. The documents must be stored in an Amazon S3 bucket. Use the DocumentLocation parameter to specify the name of your S3 bucket and the name of the document in that bucket. StartExpenseAnalysis returns a job identifier (JobId) that you will provide to GetExpenseAnalysis to retrieve the results of the operation. When the analysis of the input invoices/receipts is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you provide to the NotificationChannel. To obtain the results of the invoice and receipt analysis operation, ensure that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetExpenseAnalysis, and pass the job identifier (JobId) that was returned by your call to StartExpenseAnalysis. For more information, see Analyzing Invoices and Receipts.

```sql
EXEC aws.textract.expense_analysis.start_expense_analysis 
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
