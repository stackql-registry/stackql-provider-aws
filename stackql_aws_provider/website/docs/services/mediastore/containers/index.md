--- 
title: containers
hide_title: false
hide_table_of_contents: false
keywords:
  - containers
  - mediastore
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

Creates, updates, deletes, gets or lists a <code>containers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="containers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediastore.containers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_container"
    values={[
        { label: 'describe_container', value: 'describe_container' },
        { label: 'list_containers', value: 'list_containers' }
    ]}
>
<TabItem value="describe_container">

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
    <td><CopyableCode code="ARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the container. The ARN has the following format: arn:aws:<code>&lt;region&gt;</code>:&lt;account that owns this container&gt;:container/&lt;name of container&gt; For example: arn:aws:mediastore:us-west-2:111122223333:container/movies (pattern: &lt;code&gt;arn:aws:mediastore:&#91;a-z&#93;+-&#91;a-z&#93;+-\d:\d&#123;12&#125;:container/&#91;\w-&#93;&#123;1,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AccessLoggingEnabled" /></td>
    <td><code>boolean</code></td>
    <td>The state of access logging on the container. This value is false by default, indicating that AWS Elemental MediaStore does not send access logs to Amazon CloudWatch Logs. When you enable access logging on the container, MediaStore changes this value to true, indicating that the service delivers access logs for objects stored in that container to CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Unix timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="Endpoint" /></td>
    <td><code>string</code></td>
    <td>The DNS endpoint of the container. Use the endpoint to identify the specific container when sending requests to the data plane. The service assigns this value when the container is created. Once the value has been assigned, it does not change. (pattern: &lt;code&gt;&#91;\u0009\u000A\u000D\u0020-\u00FF&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the container. (pattern: &lt;code&gt;&#91;\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of container creation or deletion. The status is one of the following: CREATING, ACTIVE, or DELETING. While the service is creating the container, the status is CREATING. When the endpoint is available, the status changes to ACTIVE. (ACTIVE, CREATING, DELETING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_containers">

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
    <td><CopyableCode code="ARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the container. The ARN has the following format: arn:aws:<code>&lt;region&gt;</code>:&lt;account that owns this container&gt;:container/&lt;name of container&gt; For example: arn:aws:mediastore:us-west-2:111122223333:container/movies (pattern: &lt;code&gt;arn:aws:mediastore:&#91;a-z&#93;+-&#91;a-z&#93;+-\d:\d&#123;12&#125;:container/&#91;\w-&#93;&#123;1,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AccessLoggingEnabled" /></td>
    <td><code>boolean</code></td>
    <td>The state of access logging on the container. This value is false by default, indicating that AWS Elemental MediaStore does not send access logs to Amazon CloudWatch Logs. When you enable access logging on the container, MediaStore changes this value to true, indicating that the service delivers access logs for objects stored in that container to CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Unix timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="Endpoint" /></td>
    <td><code>string</code></td>
    <td>The DNS endpoint of the container. Use the endpoint to identify the specific container when sending requests to the data plane. The service assigns this value when the container is created. Once the value has been assigned, it does not change. (pattern: &lt;code&gt;&#91;\u0009\u000A\u000D\u0020-\u00FF&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the container. (pattern: &lt;code&gt;&#91;\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of container creation or deletion. The status is one of the following: CREATING, ACTIVE, or DELETING. While the service is creating the container, the status is CREATING. When the endpoint is available, the status changes to ACTIVE. (ACTIVE, CREATING, DELETING)</td>
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
    <td><a href="#describe_container"><CopyableCode code="describe_container" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the properties of the requested container. This request is commonly used to retrieve the endpoint of a container. An endpoint is a value assigned by the service when a new container is created. A container's endpoint does not change after it has been assigned. The DescribeContainer request returns a single Container object based on ContainerName. To return all Container objects that are associated with a specified AWS account, use ListContainers.</td>
</tr>
<tr>
    <td><a href="#list_containers"><CopyableCode code="list_containers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the properties of all containers in AWS Elemental MediaStore. You can query to receive all the containers in one response. Or you can include the MaxResults parameter to receive a limited number of containers in each response. In this case, the response includes a token. To get the next set of containers, send the command again, this time with the NextToken parameter (with the returned token as its value). The next set of responses appears, with a token if there are still more containers to receive. See also DescribeContainer, which gets the properties of one container.</td>
</tr>
<tr>
    <td><a href="#create_container"><CopyableCode code="create_container" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContainerName"><code>ContainerName</code></a></td>
    <td></td>
    <td>Creates a storage container to hold objects. A container is similar to a bucket in the Amazon S3 service.</td>
</tr>
<tr>
    <td><a href="#delete_container"><CopyableCode code="delete_container" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified container. Before you make a DeleteContainer request, delete any objects in the container or in any folders in the container. You can delete only empty containers.</td>
</tr>
<tr>
    <td><a href="#start_access_logging"><CopyableCode code="start_access_logging" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContainerName"><code>ContainerName</code></a></td>
    <td></td>
    <td>Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.</td>
</tr>
<tr>
    <td><a href="#stop_access_logging"><CopyableCode code="stop_access_logging" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContainerName"><code>ContainerName</code></a></td>
    <td></td>
    <td>Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.</td>
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
    defaultValue="describe_container"
    values={[
        { label: 'describe_container', value: 'describe_container' },
        { label: 'list_containers', value: 'list_containers' }
    ]}
>
<TabItem value="describe_container">

Retrieves the properties of the requested container. This request is commonly used to retrieve the endpoint of a container. An endpoint is a value assigned by the service when a new container is created. A container's endpoint does not change after it has been assigned. The DescribeContainer request returns a single Container object based on ContainerName. To return all Container objects that are associated with a specified AWS account, use ListContainers.

```sql
SELECT
ARN,
AccessLoggingEnabled,
CreationTime,
Endpoint,
Name,
Status
FROM aws.mediastore.containers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_containers">

Lists the properties of all containers in AWS Elemental MediaStore. You can query to receive all the containers in one response. Or you can include the MaxResults parameter to receive a limited number of containers in each response. In this case, the response includes a token. To get the next set of containers, send the command again, this time with the NextToken parameter (with the returned token as its value). The next set of responses appears, with a token if there are still more containers to receive. See also DescribeContainer, which gets the properties of one container.

```sql
SELECT
ARN,
AccessLoggingEnabled,
CreationTime,
Endpoint,
Name,
Status
FROM aws.mediastore.containers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_container"
    values={[
        { label: 'create_container', value: 'create_container' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_container">

Creates a storage container to hold objects. A container is similar to a bucket in the Amazon S3 service.

```sql
INSERT INTO aws.mediastore.containers (
ContainerName,
Tags,
region
)
SELECT 
'{{ ContainerName }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
Container
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: containers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the containers resource.
    - name: ContainerName
      value: "{{ ContainerName }}"
      description: |
        The name for the container. The name must be from 1 to 255 characters. Container names must be unique to your AWS account within a specific region. As an example, you could create a container named movies in every region, as long as you don’t have an existing container with that name.
    - name: Tags
      description: |
        An array of key:value pairs that you define. These values can be anything that you want. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see Tagging Resources in MediaStore.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_container"
    values={[
        { label: 'delete_container', value: 'delete_container' }
    ]}
>
<TabItem value="delete_container">

Deletes the specified container. Before you make a DeleteContainer request, delete any objects in the container or in any folders in the container. You can delete only empty containers.

```sql
DELETE FROM aws.mediastore.containers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_access_logging"
    values={[
        { label: 'start_access_logging', value: 'start_access_logging' },
        { label: 'stop_access_logging', value: 'stop_access_logging' }
    ]}
>
<TabItem value="start_access_logging">

Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.

```sql
EXEC aws.mediastore.containers.start_access_logging 
@region='{{ region }}' --required 
@@json=
'{
"ContainerName": "{{ ContainerName }}"
}'
;
```
</TabItem>
<TabItem value="stop_access_logging">

Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.

```sql
EXEC aws.mediastore.containers.stop_access_logging 
@region='{{ region }}' --required 
@@json=
'{
"ContainerName": "{{ ContainerName }}"
}'
;
```
</TabItem>
</Tabs>
