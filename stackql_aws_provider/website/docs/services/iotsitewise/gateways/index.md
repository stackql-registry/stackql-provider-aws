--- 
title: gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - gateways
  - iotsitewise
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

Creates, updates, deletes, gets or lists a <code>gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_gateway"
    values={[
        { label: 'describe_gateway', value: 'describe_gateway' },
        { label: 'list_gateways', value: 'list_gateways' }
    ]}
>
<TabItem value="describe_gateway">

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
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the gateway was created, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the gateway, which has the following format. arn:$&#123;Partition&#125;:iotsitewise:$&#123;Region&#125;:$&#123;Account&#125;:gateway/$&#123;GatewayId&#125; (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayCapabilitySummaries" /></td>
    <td><code>array</code></td>
    <td>A list of gateway capability summaries that each contain a namespace and status. Each gateway capability defines data sources for the gateway. To retrieve a capability configuration's definition, use DescribeGatewayCapabilityConfiguration.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the gateway device. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayName" /></td>
    <td><code>string</code></td>
    <td>The name of the gateway. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayPlatform" /></td>
    <td><code>object</code></td>
    <td>The gateway's platform configuration. You can only specify one platform type in a gateway. (Legacy only) For Greengrass V1 gateways, specify the greengrass parameter with a valid Greengrass group ARN. For Greengrass V2 gateways, specify the greengrassV2 parameter with a valid core device thing name. If creating a V3 gateway (gatewayVersion=3), you must also specify the coreDeviceOperatingSystem. For Siemens Industrial Edge gateways, specify the siemensIE parameter with a valid IoT Core thing name.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the gateway. Options include: 2 - Classic streams, V2 gateway. 3 - MQTT-enabled, V3 gateway. (pattern: &lt;code&gt;^&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the gateway was last updated, in Unix epoch time.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_gateways">

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
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the gateway was created, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayCapabilitySummaries" /></td>
    <td><code>array</code></td>
    <td>A list of gateway capability summaries that each contain a namespace and status. Each gateway capability defines data sources for the gateway. To retrieve a capability configuration's definition, use DescribeGatewayCapabilityConfiguration.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the gateway device. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayName" /></td>
    <td><code>string</code></td>
    <td>The name of the gateway. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayPlatform" /></td>
    <td><code>object</code></td>
    <td>The gateway's platform configuration. You can only specify one platform type in a gateway. (Legacy only) For Greengrass V1 gateways, specify the greengrass parameter with a valid Greengrass group ARN. For Greengrass V2 gateways, specify the greengrassV2 parameter with a valid core device thing name. If creating a V3 gateway (gatewayVersion=3), you must also specify the coreDeviceOperatingSystem. For Siemens Industrial Edge gateways, specify the siemensIE parameter with a valid IoT Core thing name.</td>
</tr>
<tr>
    <td><CopyableCode code="gatewayVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the gateway. Options include: 2 - Classic streams, V2 gateway. 3 - MQTT-enabled, V3 gateway. (pattern: &lt;code&gt;^&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the gateway was last updated, in Unix epoch time.</td>
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
    <td><a href="#describe_gateway"><CopyableCode code="describe_gateway" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a gateway.</td>
</tr>
<tr>
    <td><a href="#list_gateways"><CopyableCode code="list_gateways" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a paginated list of gateways.</td>
</tr>
<tr>
    <td><a href="#create_gateway"><CopyableCode code="create_gateway" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-gatewayName"><code>gatewayName</code></a>, <a href="#parameter-gatewayPlatform"><code>gatewayPlatform</code></a></td>
    <td></td>
    <td>Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to IoT SiteWise. For more information, see Ingesting data using a gateway in the IoT SiteWise User Guide.</td>
</tr>
<tr>
    <td><a href="#update_gateway"><CopyableCode code="update_gateway" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-gatewayName"><code>gatewayName</code></a></td>
    <td></td>
    <td>Updates a gateway's name.</td>
</tr>
<tr>
    <td><a href="#delete_gateway"><CopyableCode code="delete_gateway" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-gateway_id"><code>gateway_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a gateway from IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system.</td>
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
<tr id="parameter-gateway_id">
    <td><CopyableCode code="gateway_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the gateway to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request. Default: 50</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_gateway"
    values={[
        { label: 'describe_gateway', value: 'describe_gateway' },
        { label: 'list_gateways', value: 'list_gateways' }
    ]}
>
<TabItem value="describe_gateway">

Retrieves information about a gateway.

```sql
SELECT
creationDate,
gatewayArn,
gatewayCapabilitySummaries,
gatewayId,
gatewayName,
gatewayPlatform,
gatewayVersion,
lastUpdateDate
FROM aws.iotsitewise.gateways
WHERE gateway_id = '{{ gateway_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_gateways">

Retrieves a paginated list of gateways.

```sql
SELECT
creationDate,
gatewayCapabilitySummaries,
gatewayId,
gatewayName,
gatewayPlatform,
gatewayVersion,
lastUpdateDate
FROM aws.iotsitewise.gateways
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_gateway"
    values={[
        { label: 'create_gateway', value: 'create_gateway' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_gateway">

Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to IoT SiteWise. For more information, see Ingesting data using a gateway in the IoT SiteWise User Guide.

```sql
INSERT INTO aws.iotsitewise.gateways (
gatewayName,
gatewayPlatform,
gatewayVersion,
tags,
region
)
SELECT 
'{{ gatewayName }}' /* required */,
'{{ gatewayPlatform }}' /* required */,
'{{ gatewayVersion }}',
'{{ tags }}',
'{{ region }}'
RETURNING
gatewayArn,
gatewayId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: gateways
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the gateways resource.
    - name: gatewayName
      value: "{{ gatewayName }}"
    - name: gatewayPlatform
      description: |
        The gateway's platform configuration. You can only specify one platform type in a gateway. (Legacy only) For Greengrass V1 gateways, specify the greengrass parameter with a valid Greengrass group ARN. For Greengrass V2 gateways, specify the greengrassV2 parameter with a valid core device thing name. If creating a V3 gateway (gatewayVersion=3), you must also specify the coreDeviceOperatingSystem. For Siemens Industrial Edge gateways, specify the siemensIE parameter with a valid IoT Core thing name.
      value:
        greengrass:
          groupArn: "{{ groupArn }}"
        greengrassV2:
          coreDeviceThingName: "{{ coreDeviceThingName }}"
          coreDeviceOperatingSystem: "{{ coreDeviceOperatingSystem }}"
        siemensIE:
          iotCoreThingName: "{{ iotCoreThingName }}"
    - name: gatewayVersion
      value: "{{ gatewayVersion }}"
      description: |
        The version of the gateway. Options include: 2 - Classic streams, V2 gateway. 3 - MQTT-enabled, V3 gateway.
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_gateway"
    values={[
        { label: 'update_gateway', value: 'update_gateway' }
    ]}
>
<TabItem value="update_gateway">

Updates a gateway's name.

```sql
UPDATE aws.iotsitewise.gateways
SET 
gatewayName = '{{ gatewayName }}'
WHERE 
gateway_id = '{{ gateway_id }}' --required
AND region = '{{ region }}' --required
AND gatewayName = '{{ gatewayName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_gateway"
    values={[
        { label: 'delete_gateway', value: 'delete_gateway' }
    ]}
>
<TabItem value="delete_gateway">

Deletes a gateway from IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system.

```sql
DELETE FROM aws.iotsitewise.gateways
WHERE gateway_id = '{{ gateway_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
