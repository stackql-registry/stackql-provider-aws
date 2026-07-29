--- 
title: vpc_connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_connectors
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

Creates, updates, deletes, gets or lists a <code>vpc_connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apprunner.vpc_connectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpc_connector"
    values={[
        { label: 'describe_vpc_connector', value: 'describe_vpc_connector' },
        { label: 'list_vpc_connectors', value: 'list_vpc_connectors' }
    ]}
>
<TabItem value="describe_vpc_connector">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the VPC connector was created. It's in Unix time stamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the VPC connector was deleted. It's in Unix time stamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="security_groups" /></td>
    <td><code>array</code></td>
    <td>A list of IDs of security groups that App Runner uses for access to Amazon Web Services resources under the specified subnets. If not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all outbound traffic.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current state of the VPC connector. If the status of a connector revision is INACTIVE, it was deleted and can't be used. Inactive connector revisions are permanently removed some time after they are deleted. (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="subnets" /></td>
    <td><code>array</code></td>
    <td>A list of IDs of subnets that App Runner uses for your service. All IDs are of subnets of a single Amazon VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_connector_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of this VPC connector. (pattern: &lt;code&gt;arn:aws(-&#91;\w&#93;+)*:&#91;a-z0-9-\\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\\.&#93;&#123;0,63&#125;:&#91;0-9&#93;&#123;12&#125;:(\w|\/|-)&#123;1,1011&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_connector_name" /></td>
    <td><code>string</code></td>
    <td>The customer-provided VPC connector name. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9\-_&#93;&#123;3,39&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_connector_revision" /></td>
    <td><code>integer</code></td>
    <td>The revision of this VPC connector. It's unique among all the active connectors ("Status": "ACTIVE") that share the same Name. At this time, App Runner supports only one revision per name.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_vpc_connectors">

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
    <td><CopyableCode code="vpc_connectors" /></td>
    <td><code>array</code></td>
    <td>A list of information records for VPC connectors. In a paginated request, the request returns up to MaxResults records for each call.</td>
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
    <td><a href="#describe_vpc_connector"><CopyableCode code="describe_vpc_connector" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Return a description of an App Runner VPC connector resource.</td>
</tr>
<tr>
    <td><a href="#list_vpc_connectors"><CopyableCode code="list_vpc_connectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of App Runner VPC connectors in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_vpc_connector"><CopyableCode code="create_vpc_connector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VpcConnectorName"><code>VpcConnectorName</code></a>, <a href="#parameter-Subnets"><code>Subnets</code></a></td>
    <td></td>
    <td>Create an App Runner VPC connector resource. App Runner requires this resource when you want to associate your App Runner service to a custom Amazon Virtual Private Cloud (Amazon VPC).</td>
</tr>
<tr>
    <td><a href="#delete_vpc_connector"><CopyableCode code="delete_vpc_connector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an App Runner VPC connector resource. You can't delete a connector that's used by one or more App Runner services.</td>
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
    defaultValue="describe_vpc_connector"
    values={[
        { label: 'describe_vpc_connector', value: 'describe_vpc_connector' },
        { label: 'list_vpc_connectors', value: 'list_vpc_connectors' }
    ]}
>
<TabItem value="describe_vpc_connector">

Return a description of an App Runner VPC connector resource.

```sql
SELECT
created_at,
deleted_at,
security_groups,
status,
subnets,
vpc_connector_arn,
vpc_connector_name,
vpc_connector_revision
FROM aws.apprunner.vpc_connectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_vpc_connectors">

Returns a list of App Runner VPC connectors in your Amazon Web Services account.

```sql
SELECT
next_token,
vpc_connectors
FROM aws.apprunner.vpc_connectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpc_connector"
    values={[
        { label: 'create_vpc_connector', value: 'create_vpc_connector' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpc_connector">

Create an App Runner VPC connector resource. App Runner requires this resource when you want to associate your App Runner service to a custom Amazon Virtual Private Cloud (Amazon VPC).

```sql
INSERT INTO aws.apprunner.vpc_connectors (
VpcConnectorName,
Subnets,
SecurityGroups,
Tags,
region
)
SELECT 
'{{ VpcConnectorName }}' /* required */,
'{{ Subnets }}' /* required */,
'{{ SecurityGroups }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
vpc_connector
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpc_connectors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpc_connectors resource.
    - name: VpcConnectorName
      value: "{{ VpcConnectorName }}"
      description: |
        A name for the VPC connector.
    - name: Subnets
      value:
        - "{{ Subnets }}"
      description: |
        A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC. Specify IDs of subnets of a single Amazon VPC. App Runner determines the Amazon VPC from the subnets you specify. App Runner only supports subnets of IP address type IPv4 and dual stack (IPv4 and IPv6).
    - name: SecurityGroups
      value:
        - "{{ SecurityGroups }}"
      description: |
        A list of IDs of security groups that App Runner should use for access to Amazon Web Services resources under the specified subnets. If not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all outbound traffic.
    - name: Tags
      description: |
        A list of metadata items that you can associate with your VPC connector resource. A tag is a key-value pair.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpc_connector"
    values={[
        { label: 'delete_vpc_connector', value: 'delete_vpc_connector' }
    ]}
>
<TabItem value="delete_vpc_connector">

Delete an App Runner VPC connector resource. You can't delete a connector that's used by one or more App Runner services.

```sql
DELETE FROM aws.apprunner.vpc_connectors
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
