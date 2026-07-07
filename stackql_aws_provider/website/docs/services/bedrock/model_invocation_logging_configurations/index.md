--- 
title: model_invocation_logging_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - model_invocation_logging_configurations
  - bedrock
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

Creates, updates, deletes, gets or lists a <code>model_invocation_logging_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_invocation_logging_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.model_invocation_logging_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_model_invocation_logging_configuration"
    values={[
        { label: 'get_model_invocation_logging_configuration', value: 'get_model_invocation_logging_configuration' }
    ]}
>
<TabItem value="get_model_invocation_logging_configuration">

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
    <td><CopyableCode code="audioDataDeliveryEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Set to include audio data in the log delivery.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudWatchConfig" /></td>
    <td><code>object</code></td>
    <td>CloudWatch logging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="embeddingDataDeliveryEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Set to include embeddings data in the log delivery.</td>
</tr>
<tr>
    <td><CopyableCode code="imageDataDeliveryEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Set to include image data in the log delivery.</td>
</tr>
<tr>
    <td><CopyableCode code="s3Config" /></td>
    <td><code>object</code></td>
    <td>S3 configuration for storing log data.</td>
</tr>
<tr>
    <td><CopyableCode code="textDataDeliveryEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Set to include text data in the log delivery.</td>
</tr>
<tr>
    <td><CopyableCode code="videoDataDeliveryEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Set to include video data in the log delivery.</td>
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
    <td><a href="#get_model_invocation_logging_configuration"><CopyableCode code="get_model_invocation_logging_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the current configuration values for model invocation logging.</td>
</tr>
<tr>
    <td><a href="#put_model_invocation_logging_configuration"><CopyableCode code="put_model_invocation_logging_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-loggingConfig"><code>loggingConfig</code></a></td>
    <td></td>
    <td>Set the configuration values for model invocation logging.</td>
</tr>
<tr>
    <td><a href="#delete_model_invocation_logging_configuration"><CopyableCode code="delete_model_invocation_logging_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the invocation logging.</td>
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
    defaultValue="get_model_invocation_logging_configuration"
    values={[
        { label: 'get_model_invocation_logging_configuration', value: 'get_model_invocation_logging_configuration' }
    ]}
>
<TabItem value="get_model_invocation_logging_configuration">

Get the current configuration values for model invocation logging.

```sql
SELECT
audioDataDeliveryEnabled,
cloudWatchConfig,
embeddingDataDeliveryEnabled,
imageDataDeliveryEnabled,
s3Config,
textDataDeliveryEnabled,
videoDataDeliveryEnabled
FROM aws.bedrock.model_invocation_logging_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_model_invocation_logging_configuration"
    values={[
        { label: 'put_model_invocation_logging_configuration', value: 'put_model_invocation_logging_configuration' }
    ]}
>
<TabItem value="put_model_invocation_logging_configuration">

Set the configuration values for model invocation logging.

```sql
REPLACE aws.bedrock.model_invocation_logging_configurations
SET 
loggingConfig = '{{ loggingConfig }}'
WHERE 
region = '{{ region }}' --required
AND loggingConfig = '{{ loggingConfig }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_model_invocation_logging_configuration"
    values={[
        { label: 'delete_model_invocation_logging_configuration', value: 'delete_model_invocation_logging_configuration' }
    ]}
>
<TabItem value="delete_model_invocation_logging_configuration">

Delete the invocation logging.

```sql
DELETE FROM aws.bedrock.model_invocation_logging_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
