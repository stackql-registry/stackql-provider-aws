--- 
title: connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - connectors
  - config
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

Creates, updates, deletes, gets or lists a <code>connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.connectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_connectors"
    values={[
        { label: 'list_connectors', value: 'list_connectors' }
    ]}
>
<TabItem value="list_connectors">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the connector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The third-party cloud service provider. Currently, AZURE is supported. (AZURE)</td>
</tr>
<tr>
    <td><CopyableCode code="tenant_identifier" /></td>
    <td><code>string</code></td>
    <td>The Azure tenant identifier for the connector.</td>
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
    <td><a href="#list_connectors"><CopyableCode code="list_connectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of connectors depending on the filters you specify.</td>
</tr>
<tr>
    <td><a href="#put_connector"><CopyableCode code="put_connector" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectorConfiguration"><code>ConnectorConfiguration</code></a></td>
    <td></td>
    <td>Creates a connector that specifies the connection between a third-party cloud service provider and Config. A connector is required to create a service-linked configuration recorder for a third-party cloud service provider using the PutThirdPartyServiceLinkedConfigurationRecorder operation. This API creates a service-linked role AWSServiceRoleForConfigThirdParty in your account. The service-linked role is created only when the role does not exist in your account. Connectors cannot be updated To update the connector configuration, you must delete all associated configuration recorders, delete the connector, and recreate it with the updated configuration. Tags are added at creation and cannot be updated with this operation Use TagResource and UntagResource to update tags after creation.</td>
</tr>
<tr>
    <td><a href="#delete_connector"><CopyableCode code="delete_connector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified connector.</td>
</tr>
<tr>
    <td><a href="#get_connector"><CopyableCode code="get_connector" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details of the specified connector.</td>
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
    defaultValue="list_connectors"
    values={[
        { label: 'list_connectors', value: 'list_connectors' }
    ]}
>
<TabItem value="list_connectors">

Returns a list of connectors depending on the filters you specify.

```sql
SELECT
name,
arn,
created_time,
provider,
tenant_identifier
FROM aws.config.connectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_connector"
    values={[
        { label: 'put_connector', value: 'put_connector' }
    ]}
>
<TabItem value="put_connector">

Creates a connector that specifies the connection between a third-party cloud service provider and Config. A connector is required to create a service-linked configuration recorder for a third-party cloud service provider using the PutThirdPartyServiceLinkedConfigurationRecorder operation. This API creates a service-linked role AWSServiceRoleForConfigThirdParty in your account. The service-linked role is created only when the role does not exist in your account. Connectors cannot be updated To update the connector configuration, you must delete all associated configuration recorders, delete the connector, and recreate it with the updated configuration. Tags are added at creation and cannot be updated with this operation Use TagResource and UntagResource to update tags after creation.

```sql
REPLACE aws.config.connectors
SET 
ConnectorConfiguration = '{{ ConnectorConfiguration }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND ConnectorConfiguration = '{{ ConnectorConfiguration }}' --required
RETURNING
arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connector"
    values={[
        { label: 'delete_connector', value: 'delete_connector' }
    ]}
>
<TabItem value="delete_connector">

Deletes the specified connector.

```sql
DELETE FROM aws.config.connectors
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_connector"
    values={[
        { label: 'get_connector', value: 'get_connector' }
    ]}
>
<TabItem value="get_connector">

Returns the details of the specified connector.

```sql
EXEC aws.config.connectors.get_connector 
@region='{{ region }}' --required 
@@json=
'{
"Arn": "{{ Arn }}"
}'
;
```
</TabItem>
</Tabs>
