--- 
title: recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - recommendations
  - redshift
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

Creates, updates, deletes, gets or lists a <code>recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_recommendations"
    values={[
        { label: 'list_recommendations', value: 'list_recommendations' }
    ]}
>
<TabItem value="list_recommendations">

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
    <td><CopyableCode code="cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the cluster for which the recommendation is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>The date and time (UTC) that the recommendation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of the Advisor recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="impact_ranking" /></td>
    <td><code>string</code></td>
    <td>The scale of the impact that the Advisor recommendation has to the performance and cost of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Redshift cluster namespace ARN for which the recommendations is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="observation" /></td>
    <td><code>string</code></td>
    <td>The description of what was observed about your cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_text" /></td>
    <td><code>string</code></td>
    <td>The description of the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_type" /></td>
    <td><code>string</code></td>
    <td>The type of Advisor recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="recommended_actions" /></td>
    <td><code>string</code></td>
    <td>List of Amazon Redshift recommended actions.</td>
</tr>
<tr>
    <td><CopyableCode code="reference_links" /></td>
    <td><code>string</code></td>
    <td>List of helpful links for more information about the Advisor recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title of the recommendation.</td>
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
    <td><a href="#list_recommendations"><CopyableCode code="list_recommendations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-NamespaceArn"><code>NamespaceArn</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>List the Amazon Redshift Advisor recommendations for one or multiple Amazon Redshift clusters in an Amazon Web Services account.</td>
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
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Redshift cluster for which the list of Advisor recommendations is returned. If the neither the cluster identifier and the cluster namespace ARN parameters are specified, then recommendations for all clusters in the account are returned.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the Marker parameter and retrying the command. If the Marker field is empty, all response records have been retrieved for the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.</td>
</tr>
<tr id="parameter-NamespaceArn">
    <td><CopyableCode code="NamespaceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Redshift cluster namespace Amazon Resource Name (ARN) for which the list of Advisor recommendations is returned. If the neither the cluster identifier and the cluster namespace ARN parameters are specified, then recommendations for all clusters in the account are returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_recommendations"
    values={[
        { label: 'list_recommendations', value: 'list_recommendations' }
    ]}
>
<TabItem value="list_recommendations">

List the Amazon Redshift Advisor recommendations for one or multiple Amazon Redshift clusters in an Amazon Web Services account.

```sql
SELECT
cluster_identifier,
created_at,
description,
id,
impact_ranking,
namespace_arn,
observation,
recommendation_text,
recommendation_type,
recommended_actions,
reference_links,
title
FROM aws.redshift.recommendations
WHERE region = '{{ region }}' -- required
AND ClusterIdentifier = '{{ ClusterIdentifier }}'
AND NamespaceArn = '{{ NamespaceArn }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
