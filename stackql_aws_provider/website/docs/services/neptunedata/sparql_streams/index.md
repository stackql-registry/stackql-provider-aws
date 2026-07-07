--- 
title: sparql_streams
hide_title: false
hide_table_of_contents: false
keywords:
  - sparql_streams
  - neptunedata
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

Creates, updates, deletes, gets or lists a <code>sparql_streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sparql_streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptunedata.sparql_streams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sparql_stream"
    values={[
        { label: 'get_sparql_stream', value: 'get_sparql_stream' }
    ]}
>
<TabItem value="get_sparql_stream">

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
    <td><CopyableCode code="format_" /></td>
    <td><code>string</code></td>
    <td>Serialization format for the change records being returned. Currently, the only supported value is NQUADS.</td>
</tr>
<tr>
    <td><CopyableCode code="lastEventId" /></td>
    <td><code>object</code></td>
    <td>Sequence identifier of the last change in the stream response. An event ID is composed of two fields: a commitNum, which identifies a transaction that changed the graph, and an opNum, which identifies a specific operation within that transaction:</td>
</tr>
<tr>
    <td><CopyableCode code="lastTrxTimestampInMillis" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time at which the commit for the transaction was requested, in milliseconds from the Unix epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="records" /></td>
    <td><code>array</code></td>
    <td>An array of serialized change-log stream records included in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="totalRecords" /></td>
    <td><code>integer</code></td>
    <td>The total number of records in the response.</td>
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
    <td><a href="#get_sparql_stream"><CopyableCode code="get_sparql_stream" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-iteratorType"><code>iteratorType</code></a>, <a href="#parameter-commitNum"><code>commitNum</code></a>, <a href="#parameter-opNum"><code>opNum</code></a>, <a href="#parameter-Accept-Encoding"><code>Accept-Encoding</code></a></td>
    <td>Gets a stream for an RDF graph. With the Neptune Streams feature, you can generate a complete sequence of change-log entries that record every change made to your graph data as it happens. GetSparqlStream lets you collect these change-log entries for an RDF graph. The Neptune streams feature needs to be enabled on your Neptune DBcluster. To enable streams, set the neptune_streams DB cluster parameter to 1. See Capturing graph changes in real time using Neptune streams. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetStreamRecords IAM action in that cluster. Note that the neptune-db:QueryLanguage:Sparql IAM condition key can be used in the policy document to restrict the use of SPARQL queries (see Condition keys available in Neptune IAM data-access policy statements).</td>
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
<tr id="parameter-Accept-Encoding">
    <td><CopyableCode code="Accept-Encoding" /></td>
    <td><code>string</code></td>
    <td>If set to TRUE, Neptune compresses the response using gzip encoding.</td>
</tr>
<tr id="parameter-commitNum">
    <td><CopyableCode code="commitNum" /></td>
    <td><code>integer (int64)</code></td>
    <td>The commit number of the starting record to read from the change-log stream. This parameter is required when iteratorType isAT_SEQUENCE_NUMBER or AFTER_SEQUENCE_NUMBER, and ignored when iteratorType is TRIM_HORIZON or LATEST.</td>
</tr>
<tr id="parameter-iteratorType">
    <td><CopyableCode code="iteratorType" /></td>
    <td><code>string</code></td>
    <td>Can be one of: AT_SEQUENCE_NUMBER - Indicates that reading should start from the event sequence number specified jointly by the commitNum and opNum parameters. AFTER_SEQUENCE_NUMBER - Indicates that reading should start right after the event sequence number specified jointly by the commitNum and opNum parameters. TRIM_HORIZON - Indicates that reading should start at the last untrimmed record in the system, which is the oldest unexpired (not yet deleted) record in the change-log stream. LATEST - Indicates that reading should start at the most recent record in the system, which is the latest unexpired (not yet deleted) record in the change-log stream.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specifies the maximum number of records to return. There is also a size limit of 10 MB on the response that can't be modified and that takes precedence over the number of records specified in the limit parameter. The response does include a threshold-breaching record if the 10 MB limit was reached. The range for limit is 1 to 100,000, with a default of 10.</td>
</tr>
<tr id="parameter-opNum">
    <td><CopyableCode code="opNum" /></td>
    <td><code>integer (int64)</code></td>
    <td>The operation sequence number within the specified commit to start reading from in the change-log stream data. The default is 1.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sparql_stream"
    values={[
        { label: 'get_sparql_stream', value: 'get_sparql_stream' }
    ]}
>
<TabItem value="get_sparql_stream">

Gets a stream for an RDF graph. With the Neptune Streams feature, you can generate a complete sequence of change-log entries that record every change made to your graph data as it happens. GetSparqlStream lets you collect these change-log entries for an RDF graph. The Neptune streams feature needs to be enabled on your Neptune DBcluster. To enable streams, set the neptune_streams DB cluster parameter to 1. See Capturing graph changes in real time using Neptune streams. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetStreamRecords IAM action in that cluster. Note that the neptune-db:QueryLanguage:Sparql IAM condition key can be used in the policy document to restrict the use of SPARQL queries (see Condition keys available in Neptune IAM data-access policy statements).

```sql
SELECT
format_,
lastEventId,
lastTrxTimestampInMillis,
records,
totalRecords
FROM aws.neptunedata.sparql_streams
WHERE region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND iteratorType = '{{ iteratorType }}'
AND commitNum = '{{ commitNum }}'
AND opNum = '{{ opNum }}'
AND `Accept-Encoding` = '{{ Accept-Encoding }}'
;
```
</TabItem>
</Tabs>
