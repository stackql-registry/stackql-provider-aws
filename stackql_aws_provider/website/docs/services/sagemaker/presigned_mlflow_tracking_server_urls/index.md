--- 
title: presigned_mlflow_tracking_server_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - presigned_mlflow_tracking_server_urls
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>presigned_mlflow_tracking_server_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="presigned_mlflow_tracking_server_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.presigned_mlflow_tracking_server_urls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_presigned_mlflow_tracking_server_url"><CopyableCode code="create_presigned_mlflow_tracking_server_url" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrackingServerName"><code>TrackingServerName</code></a></td>
    <td></td>
    <td>Returns a presigned URL that you can use to connect to the MLflow UI attached to your tracking server. For more information, see Launch the MLflow UI using a presigned URL.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_presigned_mlflow_tracking_server_url"
    values={[
        { label: 'create_presigned_mlflow_tracking_server_url', value: 'create_presigned_mlflow_tracking_server_url' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_presigned_mlflow_tracking_server_url">

Returns a presigned URL that you can use to connect to the MLflow UI attached to your tracking server. For more information, see Launch the MLflow UI using a presigned URL.

```sql
INSERT INTO aws.sagemaker.presigned_mlflow_tracking_server_urls (
TrackingServerName,
ExpiresInSeconds,
SessionExpirationDurationInSeconds,
region
)
SELECT 
'{{ TrackingServerName }}' /* required */,
{{ ExpiresInSeconds }},
{{ SessionExpirationDurationInSeconds }},
'{{ region }}'
RETURNING
AuthorizedUrl
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: presigned_mlflow_tracking_server_urls
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the presigned_mlflow_tracking_server_urls resource.
    - name: TrackingServerName
      value: "{{ TrackingServerName }}"
      description: |
        The name of the tracking server to connect to your MLflow UI.
    - name: ExpiresInSeconds
      value: {{ ExpiresInSeconds }}
      description: |
        The duration in seconds that your presigned URL is valid. The presigned URL can be used only once.
    - name: SessionExpirationDurationInSeconds
      value: {{ SessionExpirationDurationInSeconds }}
      description: |
        The duration in seconds that your MLflow UI session is valid.
`}</CodeBlock>

</TabItem>
</Tabs>
