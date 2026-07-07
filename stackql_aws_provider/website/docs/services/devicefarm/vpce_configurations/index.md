--- 
title: vpce_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - vpce_configurations
  - devicefarm
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

Creates, updates, deletes, gets or lists a <code>vpce_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpce_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.vpce_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vpce_configuration"
    values={[
        { label: 'get_vpce_configuration', value: 'get_vpce_configuration' },
        { label: 'list_vpce_configurations', value: 'list_vpce_configurations' }
    ]}
>
<TabItem value="get_vpce_configuration">

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
    <td>The Amazon Resource Name (ARN) of the VPC endpoint configuration. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceDnsName" /></td>
    <td><code>string</code></td>
    <td>The DNS name that maps to the private IP address of the service you want to access.</td>
</tr>
<tr>
    <td><CopyableCode code="vpceConfigurationDescription" /></td>
    <td><code>string</code></td>
    <td>An optional description that provides details about your VPC endpoint configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="vpceConfigurationName" /></td>
    <td><code>string</code></td>
    <td>The friendly name you give to your VPC endpoint configuration to manage your configurations more easily.</td>
</tr>
<tr>
    <td><CopyableCode code="vpceServiceName" /></td>
    <td><code>string</code></td>
    <td>The name of the VPC endpoint service running in your AWS account that you want Device Farm to test.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_vpce_configurations">

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
    <td>The Amazon Resource Name (ARN) of the VPC endpoint configuration. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceDnsName" /></td>
    <td><code>string</code></td>
    <td>The DNS name that maps to the private IP address of the service you want to access.</td>
</tr>
<tr>
    <td><CopyableCode code="vpceConfigurationDescription" /></td>
    <td><code>string</code></td>
    <td>An optional description that provides details about your VPC endpoint configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="vpceConfigurationName" /></td>
    <td><code>string</code></td>
    <td>The friendly name you give to your VPC endpoint configuration to manage your configurations more easily.</td>
</tr>
<tr>
    <td><CopyableCode code="vpceServiceName" /></td>
    <td><code>string</code></td>
    <td>The name of the VPC endpoint service running in your AWS account that you want Device Farm to test.</td>
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
    <td><a href="#get_vpce_configuration"><CopyableCode code="get_vpce_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.</td>
</tr>
<tr>
    <td><a href="#list_vpce_configurations"><CopyableCode code="list_vpce_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.</td>
</tr>
<tr>
    <td><a href="#create_vpce_configuration"><CopyableCode code="create_vpce_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-vpceConfigurationName"><code>vpceConfigurationName</code></a>, <a href="#parameter-vpceServiceName"><code>vpceServiceName</code></a>, <a href="#parameter-serviceDnsName"><code>serviceDnsName</code></a></td>
    <td></td>
    <td>Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.</td>
</tr>
<tr>
    <td><a href="#update_vpce_configuration"><CopyableCode code="update_vpce_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.</td>
</tr>
<tr>
    <td><a href="#delete_vpce_configuration"><CopyableCode code="delete_vpce_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.</td>
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
    defaultValue="get_vpce_configuration"
    values={[
        { label: 'get_vpce_configuration', value: 'get_vpce_configuration' },
        { label: 'list_vpce_configurations', value: 'list_vpce_configurations' }
    ]}
>
<TabItem value="get_vpce_configuration">

Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.

```sql
SELECT
arn,
serviceDnsName,
vpceConfigurationDescription,
vpceConfigurationName,
vpceServiceName
FROM aws.devicefarm.vpce_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_vpce_configurations">

Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.

```sql
SELECT
arn,
serviceDnsName,
vpceConfigurationDescription,
vpceConfigurationName,
vpceServiceName
FROM aws.devicefarm.vpce_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpce_configuration"
    values={[
        { label: 'create_vpce_configuration', value: 'create_vpce_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpce_configuration">

Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.

```sql
INSERT INTO aws.devicefarm.vpce_configurations (
vpceConfigurationName,
vpceServiceName,
serviceDnsName,
vpceConfigurationDescription,
region
)
SELECT 
'{{ vpceConfigurationName }}' /* required */,
'{{ vpceServiceName }}' /* required */,
'{{ serviceDnsName }}' /* required */,
'{{ vpceConfigurationDescription }}',
'{{ region }}'
RETURNING
vpceConfiguration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpce_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpce_configurations resource.
    - name: vpceConfigurationName
      value: "{{ vpceConfigurationName }}"
      description: |
        The friendly name you give to your VPC endpoint configuration, to manage your configurations more easily.
    - name: vpceServiceName
      value: "{{ vpceServiceName }}"
      description: |
        The name of the VPC endpoint service running in your AWS account that you want Device Farm to test.
    - name: serviceDnsName
      value: "{{ serviceDnsName }}"
      description: |
        The DNS name of the service running in your VPC that you want Device Farm to test.
    - name: vpceConfigurationDescription
      value: "{{ vpceConfigurationDescription }}"
      description: |
        An optional description that provides details about your VPC endpoint configuration.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_vpce_configuration"
    values={[
        { label: 'update_vpce_configuration', value: 'update_vpce_configuration' }
    ]}
>
<TabItem value="update_vpce_configuration">

Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.

```sql
UPDATE aws.devicefarm.vpce_configurations
SET 
arn = '{{ arn }}',
vpceConfigurationName = '{{ vpceConfigurationName }}',
vpceServiceName = '{{ vpceServiceName }}',
serviceDnsName = '{{ serviceDnsName }}',
vpceConfigurationDescription = '{{ vpceConfigurationDescription }}'
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
RETURNING
vpceConfiguration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpce_configuration"
    values={[
        { label: 'delete_vpce_configuration', value: 'delete_vpce_configuration' }
    ]}
>
<TabItem value="delete_vpce_configuration">

Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.

```sql
DELETE FROM aws.devicefarm.vpce_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
