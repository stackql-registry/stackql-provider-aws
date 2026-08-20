--- 
title: compliance_inquiry_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - compliance_inquiry_queries
  - artifact
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

Creates, updates, deletes, gets or lists a <code>compliance_inquiry_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compliance_inquiry_queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.artifact.compliance_inquiry_queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_compliance_inquiry_queries"
    values={[
        { label: 'list_compliance_inquiry_queries', value: 'list_compliance_inquiry_queries' }
    ]}
>
<TabItem value="list_compliance_inquiry_queries">

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
    <td><CopyableCode code="citations" /></td>
    <td><code>array</code></td>
    <td>Supporting citations for the response.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the query was created.</td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>The actual query text. (pattern: &lt;code&gt;&#91;^&lt;&gt;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="query_identifier" /></td>
    <td><code>integer</code></td>
    <td>Sequential identifier of the query within the inquiry.</td>
</tr>
<tr>
    <td><CopyableCode code="response" /></td>
    <td><code>string</code></td>
    <td>Generated response to the query. (pattern: &lt;code&gt;&#91;^&lt;&gt;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="review_type" /></td>
    <td><code>string</code></td>
    <td>Type of review for the response. (HUMAN, AI)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current processing status of the query. (PROCESSING, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Descriptive status message. (Query processing is complete., Query processing is in-progress., An internal error occurred while processing the query. Try again at a later time., Query is pending human review., Query contains restricted or unsupported content.)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_response_versions" /></td>
    <td><code>array</code></td>
    <td>Ordered list of response version history entries, oldest first.</td>
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
    <td><a href="#list_compliance_inquiry_queries"><CopyableCode code="list_compliance_inquiry_queries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-complianceInquiryId"><code>complianceInquiryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List queries within a compliance inquiry.</td>
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
<tr id="parameter-complianceInquiryId">
    <td><CopyableCode code="complianceInquiryId" /></td>
    <td><code>string</code></td>
    <td>Unique resource ID for the compliance inquiry.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of resources to return in the paginated response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token to request the next page of resources.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_compliance_inquiry_queries"
    values={[
        { label: 'list_compliance_inquiry_queries', value: 'list_compliance_inquiry_queries' }
    ]}
>
<TabItem value="list_compliance_inquiry_queries">

List queries within a compliance inquiry.

```sql
SELECT
citations,
created_at,
query,
query_identifier,
response,
review_type,
status,
status_message,
updated_response_versions
FROM aws.artifact.compliance_inquiry_queries
WHERE complianceInquiryId = '{{ complianceInquiryId }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
