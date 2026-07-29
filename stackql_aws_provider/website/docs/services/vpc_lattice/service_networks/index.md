--- 
title: service_networks
hide_title: false
hide_table_of_contents: false
keywords:
  - service_networks
  - vpc_lattice
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

Creates, updates, deletes, gets or lists a <code>service_networks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_networks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.vpc_lattice.service_networks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_network"
    values={[
        { label: 'get_service_network', value: 'get_service_network' },
        { label: 'list_service_networks', value: 'list_service_networks' }
    ]}
>
<TabItem value="get_service_network">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the service network. (pattern: &lt;code&gt;sn-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the service network. (pattern: &lt;code&gt;(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service network. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:servicenetwork/sn-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="auth_type" /></td>
    <td><code>string</code></td>
    <td>The type of IAM policy. (NONE, AWS_IAM)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the service network was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the last update, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_associated_services" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of services associated with the service network.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_associated_vpcs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of VPCs associated with the service network.</td>
</tr>
<tr>
    <td><CopyableCode code="sharing_config" /></td>
    <td><code>object</code></td>
    <td>Specifies if the service network should be enabled for sharing.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_service_networks">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the service network. (pattern: &lt;code&gt;sn-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the service network. (pattern: &lt;code&gt;(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service network. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:servicenetwork/sn-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the service network was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the service network was last updated, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_associated_resource_configurations" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of resource configurations associated with a service network.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_associated_services" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of services associated with the service network.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_associated_vpcs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of VPCs associated with the service network.</td>
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
    <td><a href="#get_service_network"><CopyableCode code="get_service_network" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_network_identifier"><code>service_network_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified service network.</td>
</tr>
<tr>
    <td><a href="#list_service_networks"><CopyableCode code="list_service_networks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the service networks owned by or shared with this account. The account ID in the ARN shows which account owns the service network.</td>
</tr>
<tr>
    <td><a href="#create_service_network"><CopyableCode code="create_service_network" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a service network. A service network is a logical boundary for a collection of services. You can associate services and VPCs with a service network. For more information, see Service networks in the Amazon VPC Lattice User Guide.</td>
</tr>
<tr>
    <td><a href="#update_service_network"><CopyableCode code="update_service_network" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_network_identifier"><code>service_network_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-authType"><code>authType</code></a></td>
    <td></td>
    <td>Updates the specified service network.</td>
</tr>
<tr>
    <td><a href="#delete_service_network"><CopyableCode code="delete_service_network" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_network_identifier"><code>service_network_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a service network. You can only delete the service network if there is no service or VPC associated with it. If you delete a service network, all resources related to the service network, such as the resource policy, auth policy, and access log subscriptions, are also deleted. For more information, see Delete a service network in the Amazon VPC Lattice User Guide.</td>
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
<tr id="parameter-service_network_identifier">
    <td><CopyableCode code="service_network_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the service network.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_service_network"
    values={[
        { label: 'get_service_network', value: 'get_service_network' },
        { label: 'list_service_networks', value: 'list_service_networks' }
    ]}
>
<TabItem value="get_service_network">

Retrieves information about the specified service network.

```sql
SELECT
id,
name,
arn,
auth_type,
created_at,
last_updated_at,
number_of_associated_services,
number_of_associated_vpcs,
sharing_config
FROM aws.vpc_lattice.service_networks
WHERE service_network_identifier = '{{ service_network_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_service_networks">

Lists the service networks owned by or shared with this account. The account ID in the ARN shows which account owns the service network.

```sql
SELECT
id,
name,
arn,
created_at,
last_updated_at,
number_of_associated_resource_configurations,
number_of_associated_services,
number_of_associated_vpcs
FROM aws.vpc_lattice.service_networks
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service_network"
    values={[
        { label: 'create_service_network', value: 'create_service_network' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_network">

Creates a service network. A service network is a logical boundary for a collection of services. You can associate services and VPCs with a service network. For more information, see Service networks in the Amazon VPC Lattice User Guide.

```sql
INSERT INTO aws.vpc_lattice.service_networks (
clientToken,
name,
authType,
tags,
sharingConfig,
region
)
SELECT 
'{{ clientToken }}',
'{{ name }}' /* required */,
'{{ authType }}',
'{{ tags }}',
'{{ sharingConfig }}',
'{{ region }}'
RETURNING
id,
name,
arn,
auth_type,
sharing_config
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_networks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the service_networks resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: name
      value: "{{ name }}"
    - name: authType
      value: "{{ authType }}"
      valid_values: ['NONE', 'AWS_IAM']
    - name: tags
      value: "{{ tags }}"
    - name: sharingConfig
      description: |
        Specifies if the service network should be enabled for sharing.
      value:
        enabled: {{ enabled }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service_network"
    values={[
        { label: 'update_service_network', value: 'update_service_network' }
    ]}
>
<TabItem value="update_service_network">

Updates the specified service network.

```sql
UPDATE aws.vpc_lattice.service_networks
SET 
authType = '{{ authType }}'
WHERE 
service_network_identifier = '{{ service_network_identifier }}' --required
AND region = '{{ region }}' --required
AND authType = '{{ authType }}' --required
RETURNING
id,
name,
arn,
auth_type;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service_network"
    values={[
        { label: 'delete_service_network', value: 'delete_service_network' }
    ]}
>
<TabItem value="delete_service_network">

Deletes a service network. You can only delete the service network if there is no service or VPC associated with it. If you delete a service network, all resources related to the service network, such as the resource policy, auth policy, and access log subscriptions, are also deleted. For more information, see Delete a service network in the Amazon VPC Lattice User Guide.

```sql
DELETE FROM aws.vpc_lattice.service_networks
WHERE service_network_identifier = '{{ service_network_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
