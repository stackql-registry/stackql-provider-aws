--- 
title: challenge_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - challenge_metadatas
  - pca_connector_scep
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

Creates, updates, deletes, gets or lists a <code>challenge_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="challenge_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pca_connector_scep.challenge_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_challenge_metadata"
    values={[
        { label: 'get_challenge_metadata', value: 'get_challenge_metadata' },
        { label: 'list_challenge_metadata', value: 'list_challenge_metadata' }
    ]}
>
<TabItem value="get_challenge_metadata">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the challenge. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:pca-connector-scep:&#91;a-z&#93;+(-&#91;a-z&#93;+)+-&#91;1-9&#93;\d*:\d&#123;12&#125;:connector\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;\/challenge\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connector. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:pca-connector-scep:&#91;a-z&#93;+(-&#91;a-z&#93;+)+-&#91;1-9&#93;\d*:\d&#123;12&#125;:connector\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the connector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the connector was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_challenge_metadata">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the challenge. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:pca-connector-scep:&#91;a-z&#93;+(-&#91;a-z&#93;+)+-&#91;1-9&#93;\d*:\d&#123;12&#125;:connector\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;\/challenge\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connector. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:pca-connector-scep:&#91;a-z&#93;+(-&#91;a-z&#93;+)+-&#91;1-9&#93;\d*:\d&#123;12&#125;:connector\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the challenge was created.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the challenge was updated.</td>
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
    <td><a href="#get_challenge_metadata"><CopyableCode code="get_challenge_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-challenge_arn"><code>challenge_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the metadata for the specified Challenge.</td>
</tr>
<tr>
    <td><a href="#list_challenge_metadata"><CopyableCode code="list_challenge_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ConnectorArn"><code>ConnectorArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Retrieves the challenge metadata for the specified ARN.</td>
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
<tr id="parameter-ConnectorArn">
    <td><CopyableCode code="ConnectorArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connector.</td>
</tr>
<tr id="parameter-challenge_arn">
    <td><CopyableCode code="challenge_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the challenge.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of objects that you want Connector for SCEP to return for this request. If more objects are available, in the response, Connector for SCEP provides a NextToken value that you can use in a subsequent call to get the next batch of objects.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>When you request a list of objects with a MaxResults setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Connector for SCEP returns a NextToken value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_challenge_metadata"
    values={[
        { label: 'get_challenge_metadata', value: 'get_challenge_metadata' },
        { label: 'list_challenge_metadata', value: 'list_challenge_metadata' }
    ]}
>
<TabItem value="get_challenge_metadata">

Retrieves the metadata for the specified Challenge.

```sql
SELECT
arn,
connector_arn,
created_at,
updated_at
FROM aws.pca_connector_scep.challenge_metadatas
WHERE challenge_arn = '{{ challenge_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_challenge_metadata">

Retrieves the challenge metadata for the specified ARN.

```sql
SELECT
arn,
connector_arn,
created_at,
updated_at
FROM aws.pca_connector_scep.challenge_metadatas
WHERE ConnectorArn = '{{ ConnectorArn }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
