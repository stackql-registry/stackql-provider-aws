--- 
title: hosts
hide_title: false
hide_table_of_contents: false
keywords:
  - hosts
  - codeconnections
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

Creates, updates, deletes, gets or lists a <code>hosts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hosts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeconnections.hosts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_host"
    values={[
        { label: 'get_host', value: 'get_host' },
        { label: 'list_hosts', value: 'list_hosts' }
    ]}
>
<TabItem value="get_host">

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
    <td>The name of the requested host. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint of the infrastructure represented by the requested host. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_type" /></td>
    <td><code>string</code></td>
    <td>The provider type of the requested host, such as GitHub Enterprise Server. (Bitbucket, GitHub, GitHubEnterpriseServer, GitLab, GitLabSelfManaged, AzureDevOps)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the requested host. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_configuration" /></td>
    <td><code>object</code></td>
    <td>The VPC configuration of the requested host.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_hosts">

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
    <td><CopyableCode code="hosts" /></td>
    <td><code>array</code></td>
    <td>A list of hosts and the details for each host, such as status, endpoint, and provider type.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token that can be used in the next ListHosts call. To view all items in the list, continue to call this operation with each subsequent token until no more nextToken values are returned. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
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
    <td><a href="#get_host"><CopyableCode code="get_host" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the host ARN and details such as status, provider type, endpoint, and, if applicable, the VPC configuration.</td>
</tr>
<tr>
    <td><a href="#list_hosts"><CopyableCode code="list_hosts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the hosts associated with your account.</td>
</tr>
<tr>
    <td><a href="#create_host"><CopyableCode code="create_host" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProviderType"><code>ProviderType</code></a>, <a href="#parameter-ProviderEndpoint"><code>ProviderEndpoint</code></a></td>
    <td></td>
    <td>Creates a resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider. A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</td>
</tr>
<tr>
    <td><a href="#update_host"><CopyableCode code="update_host" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HostArn"><code>HostArn</code></a></td>
    <td></td>
    <td>Updates a specified host with the provided configurations.</td>
</tr>
<tr>
    <td><a href="#delete_host"><CopyableCode code="delete_host" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The host to be deleted. Before you delete a host, all connections associated to the host must be deleted. A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.</td>
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
    defaultValue="get_host"
    values={[
        { label: 'get_host', value: 'get_host' },
        { label: 'list_hosts', value: 'list_hosts' }
    ]}
>
<TabItem value="get_host">

Returns the host ARN and details such as status, provider type, endpoint, and, if applicable, the VPC configuration.

```sql
SELECT
name,
provider_endpoint,
provider_type,
status,
vpc_configuration
FROM aws.codeconnections.hosts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_hosts">

Lists the hosts associated with your account.

```sql
SELECT
hosts,
next_token
FROM aws.codeconnections.hosts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_host"
    values={[
        { label: 'create_host', value: 'create_host' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_host">

Creates a resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider. A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.

```sql
INSERT INTO aws.codeconnections.hosts (
Name,
ProviderType,
ProviderEndpoint,
VpcConfiguration,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ ProviderType }}' /* required */,
'{{ ProviderEndpoint }}' /* required */,
'{{ VpcConfiguration }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
host_arn,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: hosts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the hosts resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the host to be created.
    - name: ProviderType
      value: "{{ ProviderType }}"
      description: |
        The name of the installed provider to be associated with your connection. The host resource represents the infrastructure where your provider type is installed. The valid provider type is GitHub Enterprise Server.
      valid_values: ['Bitbucket', 'GitHub', 'GitHubEnterpriseServer', 'GitLab', 'GitLabSelfManaged', 'AzureDevOps']
    - name: ProviderEndpoint
      value: "{{ ProviderEndpoint }}"
      description: |
        The endpoint of the infrastructure to be represented by the host after it is created.
    - name: VpcConfiguration
      description: |
        The VPC configuration to be provisioned for the host. A VPC must be configured and the infrastructure to be represented by the host must already be connected to the VPC.
      value:
        VpcId: "{{ VpcId }}"
        SubnetIds:
          - "{{ SubnetIds }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        TlsCertificate: "{{ TlsCertificate }}"
    - name: Tags
      description: |
        Tags for the host to be created.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_host"
    values={[
        { label: 'update_host', value: 'update_host' }
    ]}
>
<TabItem value="update_host">

Updates a specified host with the provided configurations.

```sql
UPDATE aws.codeconnections.hosts
SET 
HostArn = '{{ HostArn }}',
ProviderEndpoint = '{{ ProviderEndpoint }}',
VpcConfiguration = '{{ VpcConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND HostArn = '{{ HostArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_host"
    values={[
        { label: 'delete_host', value: 'delete_host' }
    ]}
>
<TabItem value="delete_host">

The host to be deleted. Before you delete a host, all connections associated to the host must be deleted. A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.

```sql
DELETE FROM aws.codeconnections.hosts
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
