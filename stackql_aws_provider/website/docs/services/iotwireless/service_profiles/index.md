--- 
title: service_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - service_profiles
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

Creates, updates, deletes, gets or lists a <code>service_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.service_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_profile"
    values={[
        { label: 'get_service_profile', value: 'get_service_profile' },
        { label: 'list_service_profiles', value: 'list_service_profiles' }
    ]}
>
<TabItem value="get_service_profile">

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
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the service profile.</td>
</tr>
<tr>
    <td><CopyableCode code="LoRaWAN" /></td>
    <td><code>object</code></td>
    <td>Information about the service profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_service_profiles">

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
    <td><CopyableCode code="ServiceProfileList" /></td>
    <td><code>array</code></td>
    <td>The list of service profiles.</td>
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
    <td><a href="#get_service_profile"><CopyableCode code="get_service_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a service profile.</td>
</tr>
<tr>
    <td><a href="#list_service_profiles"><CopyableCode code="list_service_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the service profiles registered to your AWS account.</td>
</tr>
<tr>
    <td><a href="#create_service_profile"><CopyableCode code="create_service_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new service profile.</td>
</tr>
<tr>
    <td><a href="#delete_service_profile"><CopyableCode code="delete_service_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a service profile.</td>
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
    <td>The ID of the resource to delete.</td>
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
    defaultValue="get_service_profile"
    values={[
        { label: 'get_service_profile', value: 'get_service_profile' },
        { label: 'list_service_profiles', value: 'list_service_profiles' }
    ]}
>
<TabItem value="get_service_profile">

Gets information about a service profile.

```sql
SELECT
Arn,
Id,
LoRaWAN,
Name
FROM aws.iotwireless.service_profiles
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_service_profiles">

Lists the service profiles registered to your AWS account.

```sql
SELECT
NextToken,
ServiceProfileList
FROM aws.iotwireless.service_profiles
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service_profile"
    values={[
        { label: 'create_service_profile', value: 'create_service_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_profile">

Creates a new service profile.

```sql
INSERT INTO aws.iotwireless.service_profiles (
Name,
LoRaWAN,
Tags,
ClientRequestToken,
region
)
SELECT 
'{{ Name }}',
'{{ LoRaWAN }}',
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
- name: service_profiles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the service_profiles resource.
    - name: Name
      value: "{{ Name }}"
    - name: LoRaWAN
      description: |
        LoRaWANServiceProfile object.
      value:
        AddGwMetadata: {{ AddGwMetadata }}
        DrMin: {{ DrMin }}
        DrMax: {{ DrMax }}
        PrAllowed: {{ PrAllowed }}
        RaAllowed: {{ RaAllowed }}
        TxPowerIndexMin: {{ TxPowerIndexMin }}
        TxPowerIndexMax: {{ TxPowerIndexMax }}
        NbTransMin: {{ NbTransMin }}
        NbTransMax: {{ NbTransMax }}
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


## `DELETE` examples

<Tabs
    defaultValue="delete_service_profile"
    values={[
        { label: 'delete_service_profile', value: 'delete_service_profile' }
    ]}
>
<TabItem value="delete_service_profile">

Deletes a service profile.

```sql
DELETE FROM aws.iotwireless.service_profiles
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
