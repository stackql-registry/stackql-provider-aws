--- 
title: vpc_ingress_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_ingress_connections
  - apprunner
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

Creates, updates, deletes, gets or lists a <code>vpc_ingress_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_ingress_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apprunner.vpc_ingress_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpc_ingress_connection"
    values={[
        { label: 'describe_vpc_ingress_connection', value: 'describe_vpc_ingress_connection' },
        { label: 'list_vpc_ingress_connections', value: 'list_vpc_ingress_connections' }
    ]}
>
<TabItem value="describe_vpc_ingress_connection">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Account Id you use to create the VPC Ingress Connection resource. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the VPC Ingress Connection was created. It's in the Unix time stamp format. Type: Timestamp Required: Yes</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the App Runner service was deleted. It's in the Unix time stamp format. Type: Timestamp Required: No</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name associated with the VPC Ingress Connection resource. (pattern: &lt;code&gt;&#91;A-Za-z0-9*.-&#93;&#123;1,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ingress_vpc_configuration" /></td>
    <td><code>object</code></td>
    <td>Specifications for the customer’s VPC and related PrivateLink VPC endpoint that are used to associate with the VPC Ingress Connection resource.</td>
</tr>
<tr>
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service associated with the VPC Ingress Connection. (pattern: &lt;code&gt;arn:aws(-&#91;\w&#93;+)*:&#91;a-z0-9-\\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\\.&#93;&#123;0,63&#125;:&#91;0-9&#93;&#123;12&#125;:(\w|\/|-)&#123;1,1011&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the VPC Ingress Connection. The VPC Ingress Connection displays one of the following statuses: AVAILABLE, PENDING_CREATION, PENDING_UPDATE, PENDING_DELETION,FAILED_CREATION, FAILED_UPDATE, FAILED_DELETION, and DELETED.. (AVAILABLE, PENDING_CREATION, PENDING_UPDATE, PENDING_DELETION, FAILED_CREATION, FAILED_UPDATE, FAILED_DELETION, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_ingress_connection_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the VPC Ingress Connection. (pattern: &lt;code&gt;arn:aws(-&#91;\w&#93;+)*:&#91;a-z0-9-\\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\\.&#93;&#123;0,63&#125;:&#91;0-9&#93;&#123;12&#125;:(\w|\/|-)&#123;1,1011&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_ingress_connection_name" /></td>
    <td><code>string</code></td>
    <td>The customer-provided VPC Ingress Connection name. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9\-_&#93;&#123;3,39&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_vpc_ingress_connections">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_ingress_connection_summary_list" /></td>
    <td><code>array</code></td>
    <td>A list of summary information records for VPC Ingress Connections. In a paginated request, the request returns up to MaxResults records for each call.</td>
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
    <td><a href="#describe_vpc_ingress_connection"><CopyableCode code="describe_vpc_ingress_connection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Return a full description of an App Runner VPC Ingress Connection resource.</td>
</tr>
<tr>
    <td><a href="#list_vpc_ingress_connections"><CopyableCode code="list_vpc_ingress_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Return a list of App Runner VPC Ingress Connections in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_vpc_ingress_connection"><CopyableCode code="create_vpc_ingress_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServiceArn"><code>ServiceArn</code></a>, <a href="#parameter-VpcIngressConnectionName"><code>VpcIngressConnectionName</code></a>, <a href="#parameter-IngressVpcConfiguration"><code>IngressVpcConfiguration</code></a></td>
    <td></td>
    <td>Create an App Runner VPC Ingress Connection resource. App Runner requires this resource when you want to associate your App Runner service with an Amazon VPC endpoint.</td>
</tr>
<tr>
    <td><a href="#update_vpc_ingress_connection"><CopyableCode code="update_vpc_ingress_connection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VpcIngressConnectionArn"><code>VpcIngressConnectionArn</code></a>, <a href="#parameter-IngressVpcConfiguration"><code>IngressVpcConfiguration</code></a></td>
    <td></td>
    <td>Update an existing App Runner VPC Ingress Connection resource. The VPC Ingress Connection must be in one of the following states to be updated: AVAILABLE FAILED_CREATION FAILED_UPDATE</td>
</tr>
<tr>
    <td><a href="#delete_vpc_ingress_connection"><CopyableCode code="delete_vpc_ingress_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an App Runner VPC Ingress Connection resource that's associated with an App Runner service. The VPC Ingress Connection must be in one of the following states to be deleted: AVAILABLE FAILED_CREATION FAILED_UPDATE FAILED_DELETION</td>
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
    defaultValue="describe_vpc_ingress_connection"
    values={[
        { label: 'describe_vpc_ingress_connection', value: 'describe_vpc_ingress_connection' },
        { label: 'list_vpc_ingress_connections', value: 'list_vpc_ingress_connections' }
    ]}
>
<TabItem value="describe_vpc_ingress_connection">

Return a full description of an App Runner VPC Ingress Connection resource.

```sql
SELECT
account_id,
created_at,
deleted_at,
domain_name,
ingress_vpc_configuration,
service_arn,
status,
vpc_ingress_connection_arn,
vpc_ingress_connection_name
FROM aws.apprunner.vpc_ingress_connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_vpc_ingress_connections">

Return a list of App Runner VPC Ingress Connections in your Amazon Web Services account.

```sql
SELECT
next_token,
vpc_ingress_connection_summary_list
FROM aws.apprunner.vpc_ingress_connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpc_ingress_connection"
    values={[
        { label: 'create_vpc_ingress_connection', value: 'create_vpc_ingress_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpc_ingress_connection">

Create an App Runner VPC Ingress Connection resource. App Runner requires this resource when you want to associate your App Runner service with an Amazon VPC endpoint.

```sql
INSERT INTO aws.apprunner.vpc_ingress_connections (
ServiceArn,
VpcIngressConnectionName,
IngressVpcConfiguration,
Tags,
region
)
SELECT 
'{{ ServiceArn }}' /* required */,
'{{ VpcIngressConnectionName }}' /* required */,
'{{ IngressVpcConfiguration }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
vpc_ingress_connection
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpc_ingress_connections
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpc_ingress_connections resource.
    - name: ServiceArn
      value: "{{ ServiceArn }}"
      description: |
        The Amazon Resource Name (ARN) for this App Runner service that is used to create the VPC Ingress Connection resource.
    - name: VpcIngressConnectionName
      value: "{{ VpcIngressConnectionName }}"
      description: |
        A name for the VPC Ingress Connection resource. It must be unique across all the active VPC Ingress Connections in your Amazon Web Services account in the Amazon Web Services Region.
    - name: IngressVpcConfiguration
      description: |
        Specifications for the customer’s Amazon VPC and the related Amazon Web Services PrivateLink VPC endpoint that are used to create the VPC Ingress Connection resource.
      value:
        VpcId: "{{ VpcId }}"
        VpcEndpointId: "{{ VpcEndpointId }}"
    - name: Tags
      description: |
        An optional list of metadata items that you can associate with the VPC Ingress Connection resource. A tag is a key-value pair.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_vpc_ingress_connection"
    values={[
        { label: 'update_vpc_ingress_connection', value: 'update_vpc_ingress_connection' }
    ]}
>
<TabItem value="update_vpc_ingress_connection">

Update an existing App Runner VPC Ingress Connection resource. The VPC Ingress Connection must be in one of the following states to be updated: AVAILABLE FAILED_CREATION FAILED_UPDATE

```sql
UPDATE aws.apprunner.vpc_ingress_connections
SET 
VpcIngressConnectionArn = '{{ VpcIngressConnectionArn }}',
IngressVpcConfiguration = '{{ IngressVpcConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND VpcIngressConnectionArn = '{{ VpcIngressConnectionArn }}' --required
AND IngressVpcConfiguration = '{{ IngressVpcConfiguration }}' --required
RETURNING
vpc_ingress_connection;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpc_ingress_connection"
    values={[
        { label: 'delete_vpc_ingress_connection', value: 'delete_vpc_ingress_connection' }
    ]}
>
<TabItem value="delete_vpc_ingress_connection">

Delete an App Runner VPC Ingress Connection resource that's associated with an App Runner service. The VPC Ingress Connection must be in one of the following states to be deleted: AVAILABLE FAILED_CREATION FAILED_UPDATE FAILED_DELETION

```sql
DELETE FROM aws.apprunner.vpc_ingress_connections
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
