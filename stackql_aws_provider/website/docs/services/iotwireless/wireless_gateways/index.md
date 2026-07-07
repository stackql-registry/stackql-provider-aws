--- 
title: wireless_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - wireless_gateways
  - iotwireless
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

Creates, updates, deletes, gets or lists a <code>wireless_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="wireless_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.wireless_gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_wireless_gateway"
    values={[
        { label: 'get_wireless_gateway', value: 'get_wireless_gateway' },
        { label: 'list_wireless_gateways', value: 'list_wireless_gateways' }
    ]}
>
<TabItem value="get_wireless_gateway">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the new resource.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the wireless gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="LoRaWAN" /></td>
    <td><code>object</code></td>
    <td>LoRaWANGateway object.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ThingArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the thing associated with the wireless gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="ThingName" /></td>
    <td><code>string</code></td>
    <td>The name of the thing associated with the wireless gateway. The value is empty if a thing isn't associated with the gateway.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_wireless_gateways">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to get the next set of results, or null if there are no additional results.</td>
</tr>
<tr>
    <td><CopyableCode code="WirelessGatewayList" /></td>
    <td><code>array</code></td>
    <td>The ID of the wireless gateway.</td>
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
    <td><a href="#get_wireless_gateway"><CopyableCode code="get_wireless_gateway" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-identifierType"><code>identifierType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a wireless gateway.</td>
</tr>
<tr>
    <td><a href="#list_wireless_gateways"><CopyableCode code="list_wireless_gateways" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the wireless gateways registered to your AWS account.</td>
</tr>
<tr>
    <td><a href="#create_wireless_gateway"><CopyableCode code="create_wireless_gateway" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LoRaWAN"><code>LoRaWAN</code></a></td>
    <td></td>
    <td>Provisions a wireless gateway. When provisioning a wireless gateway, you might run into duplication errors for the following reasons. If you specify a GatewayEui value that already exists. If you used a ClientRequestToken with the same parameters within the last 10 minutes. To avoid this error, make sure that you use unique identifiers and parameters for each request within the specified time period.</td>
</tr>
<tr>
    <td><a href="#associate_wireless_gateway_with_certificate"><CopyableCode code="associate_wireless_gateway_with_certificate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IotCertificateId"><code>IotCertificateId</code></a></td>
    <td></td>
    <td>Associates a wireless gateway with a certificate.</td>
</tr>
<tr>
    <td><a href="#associate_wireless_gateway_with_thing"><CopyableCode code="associate_wireless_gateway_with_thing" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ThingArn"><code>ThingArn</code></a></td>
    <td></td>
    <td>Associates a wireless gateway with a thing.</td>
</tr>
<tr>
    <td><a href="#update_wireless_gateway"><CopyableCode code="update_wireless_gateway" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates properties of a wireless gateway.</td>
</tr>
<tr>
    <td><a href="#delete_wireless_gateway"><CopyableCode code="delete_wireless_gateway" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a wireless gateway. When deleting a wireless gateway, you might run into duplication errors for the following reasons. If you specify a GatewayEui value that already exists. If you used a ClientRequestToken with the same parameters within the last 10 minutes. To avoid this error, make sure that you use unique identifiers and parameters for each request within the specified time period.</td>
</tr>
<tr>
    <td><a href="#disassociate_wireless_gateway_from_certificate"><CopyableCode code="disassociate_wireless_gateway_from_certificate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a wireless gateway from its currently associated certificate.</td>
</tr>
<tr>
    <td><a href="#disassociate_wireless_gateway_from_thing"><CopyableCode code="disassociate_wireless_gateway_from_thing" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a wireless gateway from its currently associated thing.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource to update.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the wireless gateway to get.</td>
</tr>
<tr id="parameter-identifierType">
    <td><CopyableCode code="identifierType" /></td>
    <td><code>string</code></td>
    <td>The type of identifier used in identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this operation.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_wireless_gateway"
    values={[
        { label: 'get_wireless_gateway', value: 'get_wireless_gateway' },
        { label: 'list_wireless_gateways', value: 'list_wireless_gateways' }
    ]}
>
<TabItem value="get_wireless_gateway">

Gets information about a wireless gateway.

```sql
SELECT
Arn,
Description,
Id,
LoRaWAN,
Name,
ThingArn,
ThingName
FROM aws.iotwireless.wireless_gateways
WHERE identifier = '{{ identifier }}' -- required
AND identifierType = '{{ identifierType }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_wireless_gateways">

Lists the wireless gateways registered to your AWS account.

```sql
SELECT
NextToken,
WirelessGatewayList
FROM aws.iotwireless.wireless_gateways
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_wireless_gateway"
    values={[
        { label: 'create_wireless_gateway', value: 'create_wireless_gateway' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_wireless_gateway">

Provisions a wireless gateway. When provisioning a wireless gateway, you might run into duplication errors for the following reasons. If you specify a GatewayEui value that already exists. If you used a ClientRequestToken with the same parameters within the last 10 minutes. To avoid this error, make sure that you use unique identifiers and parameters for each request within the specified time period.

```sql
INSERT INTO aws.iotwireless.wireless_gateways (
Name,
Description,
LoRaWAN,
Tags,
ClientRequestToken,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ LoRaWAN }}' /* required */,
'{{ Tags }}',
'{{ ClientRequestToken }}',
'{{ region }}'
RETURNING
Arn,
Id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: wireless_gateways
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the wireless_gateways resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the new resource.
    - name: LoRaWAN
      description: |
        LoRaWANGateway object.
      value:
        GatewayEui: "{{ GatewayEui }}"
        RfRegion: "{{ RfRegion }}"
        JoinEuiFilters:
          - "{{ JoinEuiFilters }}"
        NetIdFilters:
          - "{{ NetIdFilters }}"
        SubBands:
          - {{ SubBands }}
        Beaconing:
          DataRate: {{ DataRate }}
          Frequencies:
            - {{ Frequencies }}
        MaxEirp: {{ MaxEirp }}
    - name: Tags
      description: |
        The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see Ensuring idempotency in Amazon EC2 API requests.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_wireless_gateway_with_certificate"
    values={[
        { label: 'associate_wireless_gateway_with_certificate', value: 'associate_wireless_gateway_with_certificate' },
        { label: 'associate_wireless_gateway_with_thing', value: 'associate_wireless_gateway_with_thing' },
        { label: 'update_wireless_gateway', value: 'update_wireless_gateway' }
    ]}
>
<TabItem value="associate_wireless_gateway_with_certificate">

Associates a wireless gateway with a certificate.

```sql
UPDATE aws.iotwireless.wireless_gateways
SET 
IotCertificateId = '{{ IotCertificateId }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND IotCertificateId = '{{ IotCertificateId }}' --required
RETURNING
IotCertificateId;
```
</TabItem>
<TabItem value="associate_wireless_gateway_with_thing">

Associates a wireless gateway with a thing.

```sql
UPDATE aws.iotwireless.wireless_gateways
SET 
ThingArn = '{{ ThingArn }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND ThingArn = '{{ ThingArn }}' --required;
```
</TabItem>
<TabItem value="update_wireless_gateway">

Updates properties of a wireless gateway.

```sql
UPDATE aws.iotwireless.wireless_gateways
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
JoinEuiFilters = '{{ JoinEuiFilters }}',
NetIdFilters = '{{ NetIdFilters }}',
MaxEirp = {{ MaxEirp }}
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_wireless_gateway"
    values={[
        { label: 'delete_wireless_gateway', value: 'delete_wireless_gateway' }
    ]}
>
<TabItem value="delete_wireless_gateway">

Deletes a wireless gateway. When deleting a wireless gateway, you might run into duplication errors for the following reasons. If you specify a GatewayEui value that already exists. If you used a ClientRequestToken with the same parameters within the last 10 minutes. To avoid this error, make sure that you use unique identifiers and parameters for each request within the specified time period.

```sql
DELETE FROM aws.iotwireless.wireless_gateways
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_wireless_gateway_from_certificate"
    values={[
        { label: 'disassociate_wireless_gateway_from_certificate', value: 'disassociate_wireless_gateway_from_certificate' },
        { label: 'disassociate_wireless_gateway_from_thing', value: 'disassociate_wireless_gateway_from_thing' }
    ]}
>
<TabItem value="disassociate_wireless_gateway_from_certificate">

Disassociates a wireless gateway from its currently associated certificate.

```sql
EXEC aws.iotwireless.wireless_gateways.disassociate_wireless_gateway_from_certificate 
@id='{{ id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="disassociate_wireless_gateway_from_thing">

Disassociates a wireless gateway from its currently associated thing.

```sql
EXEC aws.iotwireless.wireless_gateways.disassociate_wireless_gateway_from_thing 
@id='{{ id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
