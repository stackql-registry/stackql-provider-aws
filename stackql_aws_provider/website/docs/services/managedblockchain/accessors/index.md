--- 
title: accessors
hide_title: false
hide_table_of_contents: false
keywords:
  - accessors
  - managedblockchain
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

Creates, updates, deletes, gets or lists an <code>accessors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="accessors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.managedblockchain.accessors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_accessor"
    values={[
        { label: 'get_accessor', value: 'get_accessor' },
        { label: 'list_accessors', value: 'list_accessors' }
    ]}
>
<TabItem value="get_accessor">

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
    <td>The Amazon Resource Name (ARN) of the accessor. For more information about ARNs and their format, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference. (pattern: &lt;code&gt;^arn:.+:.+:.+:.+:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="BillingToken" /></td>
    <td><code>string</code></td>
    <td>The billing token is a property of the Accessor. Use this token to when making calls to the blockchain network. The billing token is used to track your accessor token for billing requests.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date and time of the accessor.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the accessor.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkType" /></td>
    <td><code>string</code></td>
    <td>The blockchain network that the Accessor token is created for. (ETHEREUM_GOERLI, ETHEREUM_MAINNET, ETHEREUM_MAINNET_AND_GOERLI, POLYGON_MAINNET, POLYGON_MUMBAI)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the accessor. (AVAILABLE, PENDING_DELETION, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the Accessor. For more information about tags, see Tagging Resources in the Amazon Managed Blockchain Ethereum Developer Guide, or Tagging Resources in the Amazon Managed Blockchain Hyperledger Fabric Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of the accessor. Currently, accessor type is restricted to BILLING_TOKEN. (BILLING_TOKEN)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_accessors">

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
    <td>The Amazon Resource Name (ARN) of the accessor. For more information about ARNs and their format, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference. (pattern: &lt;code&gt;^arn:.+:.+:.+:.+:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date and time of the accessor.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the accessor.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkType" /></td>
    <td><code>string</code></td>
    <td>The blockchain network that the Accessor token is created for. (ETHEREUM_GOERLI, ETHEREUM_MAINNET, ETHEREUM_MAINNET_AND_GOERLI, POLYGON_MAINNET, POLYGON_MUMBAI)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the accessor. (AVAILABLE, PENDING_DELETION, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of the accessor. Currently accessor type is restricted to BILLING_TOKEN. (BILLING_TOKEN)</td>
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
    <td><a href="#get_accessor"><CopyableCode code="get_accessor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-accessor_id"><code>accessor_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information about an accessor. An accessor object is a container that has the information required for token based access to your Ethereum nodes.</td>
</tr>
<tr>
    <td><a href="#list_accessors"><CopyableCode code="list_accessors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-networkType"><code>networkType</code></a></td>
    <td>Returns a list of the accessors and their properties. Accessor objects are containers that have the information required for token based access to your Ethereum nodes.</td>
</tr>
<tr>
    <td><a href="#create_accessor"><CopyableCode code="create_accessor" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-AccessorType"><code>AccessorType</code></a></td>
    <td></td>
    <td>Creates a new accessor for use with Amazon Managed Blockchain service that supports token based access. The accessor contains information required for token based access.</td>
</tr>
<tr>
    <td><a href="#delete_accessor"><CopyableCode code="delete_accessor" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-accessor_id"><code>accessor_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an accessor that your Amazon Web Services account owns. An accessor object is a container that has the information required for token based access to your Ethereum nodes including, the BILLING_TOKEN. After an accessor is deleted, the status of the accessor changes from AVAILABLE to PENDING_DELETION. An accessor in the PENDING_DELETION state can’t be used for new WebSocket requests or HTTP requests. However, WebSocket connections that were initiated while the accessor was in the AVAILABLE state remain open until they expire (up to 2 hours).</td>
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
<tr id="parameter-accessor_id">
    <td><CopyableCode code="accessor_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the accessor.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of accessors to list.</td>
</tr>
<tr id="parameter-networkType">
    <td><CopyableCode code="networkType" /></td>
    <td><code>string</code></td>
    <td>The blockchain network that the Accessor token is created for. Use the value ETHEREUM_MAINNET_AND_GOERLI for all existing Accessors tokens that were created before the networkType property was introduced.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that indicates the next set of results to retrieve.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_accessor"
    values={[
        { label: 'get_accessor', value: 'get_accessor' },
        { label: 'list_accessors', value: 'list_accessors' }
    ]}
>
<TabItem value="get_accessor">

Returns detailed information about an accessor. An accessor object is a container that has the information required for token based access to your Ethereum nodes.

```sql
SELECT
Arn,
BillingToken,
CreationDate,
Id,
NetworkType,
Status,
Tags,
Type
FROM aws.managedblockchain.accessors
WHERE accessor_id = '{{ accessor_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_accessors">

Returns a list of the accessors and their properties. Accessor objects are containers that have the information required for token based access to your Ethereum nodes.

```sql
SELECT
Arn,
CreationDate,
Id,
NetworkType,
Status,
Type
FROM aws.managedblockchain.accessors
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND networkType = '{{ networkType }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_accessor"
    values={[
        { label: 'create_accessor', value: 'create_accessor' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_accessor">

Creates a new accessor for use with Amazon Managed Blockchain service that supports token based access. The accessor contains information required for token based access.

```sql
INSERT INTO aws.managedblockchain.accessors (
ClientRequestToken,
AccessorType,
Tags,
NetworkType,
region
)
SELECT 
'{{ ClientRequestToken }}' /* required */,
'{{ AccessorType }}' /* required */,
'{{ Tags }}',
'{{ NetworkType }}',
'{{ region }}'
RETURNING
AccessorId,
BillingToken,
NetworkType
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: accessors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the accessors resource.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
    - name: AccessorType
      value: "{{ AccessorType }}"
      valid_values: ['BILLING_TOKEN']
    - name: Tags
      value: "{{ Tags }}"
    - name: NetworkType
      value: "{{ NetworkType }}"
      valid_values: ['ETHEREUM_GOERLI', 'ETHEREUM_MAINNET', 'ETHEREUM_MAINNET_AND_GOERLI', 'POLYGON_MAINNET', 'POLYGON_MUMBAI']
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_accessor"
    values={[
        { label: 'delete_accessor', value: 'delete_accessor' }
    ]}
>
<TabItem value="delete_accessor">

Deletes an accessor that your Amazon Web Services account owns. An accessor object is a container that has the information required for token based access to your Ethereum nodes including, the BILLING_TOKEN. After an accessor is deleted, the status of the accessor changes from AVAILABLE to PENDING_DELETION. An accessor in the PENDING_DELETION state can’t be used for new WebSocket requests or HTTP requests. However, WebSocket connections that were initiated while the accessor was in the AVAILABLE state remain open until they expire (up to 2 hours).

```sql
DELETE FROM aws.managedblockchain.accessors
WHERE accessor_id = '{{ accessor_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
