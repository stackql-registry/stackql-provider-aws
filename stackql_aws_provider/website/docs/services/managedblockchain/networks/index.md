--- 
title: networks
hide_title: false
hide_table_of_contents: false
keywords:
  - networks
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

Creates, updates, deletes, gets or lists a <code>networks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="networks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.managedblockchain.networks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_network"
    values={[
        { label: 'get_network', value: 'get_network' },
        { label: 'list_networks', value: 'list_networks' }
    ]}
>
<TabItem value="get_network">

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
    <td>The Amazon Resource Name (ARN) of the network. For more information about ARNs and their format, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference. (pattern: &lt;code&gt;^arn:.+:.+:.+:.+:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the network was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Attributes of the blockchain framework for the network.</td>
</tr>
<tr>
    <td><CopyableCode code="framework" /></td>
    <td><code>string</code></td>
    <td>The blockchain framework that the network uses. (HYPERLEDGER_FABRIC, ETHEREUM)</td>
</tr>
<tr>
    <td><CopyableCode code="framework_attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes of the blockchain framework that the network uses.</td>
</tr>
<tr>
    <td><CopyableCode code="framework_version" /></td>
    <td><code>string</code></td>
    <td>The version of the blockchain framework that the network uses.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the network.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the network. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the network. (CREATING, AVAILABLE, CREATE_FAILED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags assigned to the network. Each tag consists of a key and optional value. For more information about tags, see Tagging Resources in the Amazon Managed Blockchain Ethereum Developer Guide, or Tagging Resources in the Amazon Managed Blockchain Hyperledger Fabric Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="voting_policy" /></td>
    <td><code>object</code></td>
    <td>The voting rules for the network to decide if a proposal is accepted Applies only to Hyperledger Fabric.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_service_name" /></td>
    <td><code>string</code></td>
    <td>The VPC endpoint service name of the VPC endpoint service of the network. Members use the VPC endpoint service name to create a VPC endpoint to access network resources.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_networks">

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
    <td><CopyableCode code="networks" /></td>
    <td><code>array</code></td>
    <td>An array of NetworkSummary objects that contain configuration properties for each network.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The pagination token that indicates the next set of results to retrieve.</td>
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
    <td><a href="#get_network"><CopyableCode code="get_network" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information about a network. Applies to Hyperledger Fabric and Ethereum.</td>
</tr>
<tr>
    <td><a href="#list_networks"><CopyableCode code="list_networks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-framework"><code>framework</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns information about the networks in which the current Amazon Web Services account participates. Applies to Hyperledger Fabric and Ethereum.</td>
</tr>
<tr>
    <td><a href="#create_network"><CopyableCode code="create_network" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Framework"><code>Framework</code></a>, <a href="#parameter-FrameworkVersion"><code>FrameworkVersion</code></a>, <a href="#parameter-VotingPolicy"><code>VotingPolicy</code></a>, <a href="#parameter-MemberConfiguration"><code>MemberConfiguration</code></a></td>
    <td></td>
    <td>Creates a new blockchain network using Amazon Managed Blockchain. Applies only to Hyperledger Fabric.</td>
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
<tr id="parameter-network_id">
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the network to get information about.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-framework">
    <td><CopyableCode code="framework" /></td>
    <td><code>string</code></td>
    <td>An optional framework specifier. If provided, only networks of this framework type are listed.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of networks to list.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the network.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that indicates the next set of results to retrieve.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>An optional status specifier. If provided, only networks currently in this status are listed. Applies only to Hyperledger Fabric.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_network"
    values={[
        { label: 'get_network', value: 'get_network' },
        { label: 'list_networks', value: 'list_networks' }
    ]}
>
<TabItem value="get_network">

Returns detailed information about a network. Applies to Hyperledger Fabric and Ethereum.

```sql
SELECT
arn,
creation_date,
description,
framework,
framework_attributes,
framework_version,
id,
name,
status,
tags,
voting_policy,
vpc_endpoint_service_name
FROM aws.managedblockchain.networks
WHERE network_id = '{{ network_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_networks">

Returns information about the networks in which the current Amazon Web Services account participates. Applies to Hyperledger Fabric and Ethereum.

```sql
SELECT
networks,
next_token
FROM aws.managedblockchain.networks
WHERE region = '{{ region }}' -- required
AND name = '{{ name }}'
AND framework = '{{ framework }}'
AND status = '{{ status }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_network"
    values={[
        { label: 'create_network', value: 'create_network' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_network">

Creates a new blockchain network using Amazon Managed Blockchain. Applies only to Hyperledger Fabric.

```sql
INSERT INTO aws.managedblockchain.networks (
ClientRequestToken,
Name,
Description,
Framework,
FrameworkVersion,
FrameworkConfiguration,
VotingPolicy,
MemberConfiguration,
Tags,
region
)
SELECT 
'{{ ClientRequestToken }}' /* required */,
'{{ Name }}' /* required */,
'{{ Description }}',
'{{ Framework }}' /* required */,
'{{ FrameworkVersion }}' /* required */,
'{{ FrameworkConfiguration }}',
'{{ VotingPolicy }}' /* required */,
'{{ MemberConfiguration }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
member_id,
network_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: networks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the networks resource.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: Framework
      value: "{{ Framework }}"
      valid_values: ['HYPERLEDGER_FABRIC', 'ETHEREUM']
    - name: FrameworkVersion
      value: "{{ FrameworkVersion }}"
    - name: FrameworkConfiguration
      description: |
        Configuration properties relevant to the network for the blockchain framework that the network uses.
      value:
        Fabric:
          Edition: "{{ Edition }}"
    - name: VotingPolicy
      description: |
        The voting rules for the network to decide if a proposal is accepted Applies only to Hyperledger Fabric.
      value:
        ApprovalThresholdPolicy:
          ThresholdPercentage: {{ ThresholdPercentage }}
          ProposalDurationInHours: {{ ProposalDurationInHours }}
          ThresholdComparator: "{{ ThresholdComparator }}"
    - name: MemberConfiguration
      description: |
        Configuration properties of the member. Applies only to Hyperledger Fabric.
      value:
        Name: "{{ Name }}"
        Description: "{{ Description }}"
        FrameworkConfiguration:
          Fabric:
            AdminUsername: "{{ AdminUsername }}"
            AdminPassword: "{{ AdminPassword }}"
        LogPublishingConfiguration:
          Fabric:
            CaLogs:
              Cloudwatch:
                Enabled: {{ Enabled }}
        Tags: "{{ Tags }}"
        KmsKeyArn: "{{ KmsKeyArn }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>
