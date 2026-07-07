--- 
title: cloud_connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_connectors
  - iot_managed_integrations
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

Creates, updates, deletes, gets or lists a <code>cloud_connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.cloud_connectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cloud_connector"
    values={[
        { label: 'get_cloud_connector', value: 'get_cloud_connector' },
        { label: 'list_cloud_connectors', value: 'list_cloud_connectors' }
    ]}
>
<TabItem value="get_cloud_connector">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the C2C connector. (pattern: &lt;code&gt;&#91;0-9A-Za-z_\- &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration details for an endpoint, which defines how to connect to and communicate with external services.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointType" /></td>
    <td><code>string</code></td>
    <td>The type of endpoint used for the cloud connector, which defines how the connector communicates with external services. (LAMBDA)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the cloud connector. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The display name of the C2C connector. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of cloud connector created. (LISTED, UNLISTED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cloud_connectors">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the C2C connector. (pattern: &lt;code&gt;&#91;0-9A-Za-z_\- &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration details for an endpoint, which defines how to connect to and communicate with external services.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointType" /></td>
    <td><code>string</code></td>
    <td>The type of endpoint used for the C2C connector. (LAMBDA)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the C2C connector. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The display name of the C2C connector. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of cloud connector created. (LISTED, UNLISTED)</td>
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
    <td><a href="#get_cloud_connector"><CopyableCode code="get_cloud_connector" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get configuration details for a cloud connector.</td>
</tr>
<tr>
    <td><a href="#list_cloud_connectors"><CopyableCode code="list_cloud_connectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-LambdaArn"><code>LambdaArn</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a list of connectors filtered by its Lambda Amazon Resource Name (ARN) and type.</td>
</tr>
<tr>
    <td><a href="#create_cloud_connector"><CopyableCode code="create_cloud_connector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointConfig"><code>EndpointConfig</code></a></td>
    <td></td>
    <td>Creates a C2C (cloud-to-cloud) connector.</td>
</tr>
<tr>
    <td><a href="#update_cloud_connector"><CopyableCode code="update_cloud_connector" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update an existing cloud connector.</td>
</tr>
<tr>
    <td><a href="#delete_cloud_connector"><CopyableCode code="delete_cloud_connector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a cloud connector.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the cloud connector.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-LambdaArn">
    <td><CopyableCode code="LambdaArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Lambda function to filter cloud connectors by.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be used to retrieve the next set of results.</td>
</tr>
<tr id="parameter-Type">
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of cloud connectors to filter by when listing available connectors.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cloud_connector"
    values={[
        { label: 'get_cloud_connector', value: 'get_cloud_connector' },
        { label: 'list_cloud_connectors', value: 'list_cloud_connectors' }
    ]}
>
<TabItem value="get_cloud_connector">

Get configuration details for a cloud connector.

```sql
SELECT
Description,
EndpointConfig,
EndpointType,
Id,
Name,
Type
FROM aws.iot_managed_integrations.cloud_connectors
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_cloud_connectors">

Returns a list of connectors filtered by its Lambda Amazon Resource Name (ARN) and type.

```sql
SELECT
Description,
EndpointConfig,
EndpointType,
Id,
Name,
Type
FROM aws.iot_managed_integrations.cloud_connectors
WHERE region = '{{ region }}' -- required
AND Type = '{{ Type }}'
AND LambdaArn = '{{ LambdaArn }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cloud_connector"
    values={[
        { label: 'create_cloud_connector', value: 'create_cloud_connector' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cloud_connector">

Creates a C2C (cloud-to-cloud) connector.

```sql
INSERT INTO aws.iot_managed_integrations.cloud_connectors (
Name,
EndpointConfig,
Description,
EndpointType,
ClientToken,
region
)
SELECT 
'{{ Name }}',
'{{ EndpointConfig }}' /* required */,
'{{ Description }}',
'{{ EndpointType }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
Id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cloud_connectors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cloud_connectors resource.
    - name: Name
      value: "{{ Name }}"
    - name: EndpointConfig
      description: |
        The configuration details for an endpoint, which defines how to connect to and communicate with external services.
      value:
        lambda:
          arn: "{{ arn }}"
    - name: Description
      value: "{{ Description }}"
    - name: EndpointType
      value: "{{ EndpointType }}"
      valid_values: ['LAMBDA']
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cloud_connector"
    values={[
        { label: 'update_cloud_connector', value: 'update_cloud_connector' }
    ]}
>
<TabItem value="update_cloud_connector">

Update an existing cloud connector.

```sql
UPDATE aws.iot_managed_integrations.cloud_connectors
SET 
Name = '{{ Name }}',
Description = '{{ Description }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cloud_connector"
    values={[
        { label: 'delete_cloud_connector', value: 'delete_cloud_connector' }
    ]}
>
<TabItem value="delete_cloud_connector">

Delete a cloud connector.

```sql
DELETE FROM aws.iot_managed_integrations.cloud_connectors
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
