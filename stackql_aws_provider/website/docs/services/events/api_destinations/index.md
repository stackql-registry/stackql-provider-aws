--- 
title: api_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - api_destinations
  - events
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

Creates, updates, deletes, gets or lists an <code>api_destinations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="api_destinations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.events.api_destinations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_api_destination"
    values={[
        { label: 'describe_api_destination', value: 'describe_api_destination' }
    ]}
>
<TabItem value="describe_api_destination">

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
    <td><CopyableCode code="ApiDestinationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the API destination retrieved. (pattern: &lt;code&gt;^arn:aws(&#91;a-z&#93;|\-)*:events:(&#91;a-z&#93;|\d|\-)*:(&#91;0-9&#93;&#123;12&#125;)?:api-destination\/&#91;\.\-_A-Za-z0-9&#93;+\/&#91;\-A-Za-z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ApiDestinationState" /></td>
    <td><code>string</code></td>
    <td>The state of the API destination retrieved. (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the connection specified for the API destination retrieved. (pattern: &lt;code&gt;^arn:aws(&#91;a-z&#93;|\-)*:events:(&#91;a-z&#93;|\d|\-)*:(&#91;0-9&#93;&#123;12&#125;)?:connection\/&#91;\.\-_A-Za-z0-9&#93;+\/&#91;\-A-Za-z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp for the time that the API destination was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description for the API destination retrieved. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HttpMethod" /></td>
    <td><code>string</code></td>
    <td>The method to use to connect to the HTTP endpoint. (POST, GET, HEAD, OPTIONS, PUT, PATCH, DELETE)</td>
</tr>
<tr>
    <td><CopyableCode code="InvocationEndpoint" /></td>
    <td><code>string</code></td>
    <td>The URL to use to connect to the HTTP endpoint. (pattern: &lt;code&gt;^((%&#91;0-9A-Fa-f&#93;&#123;2&#125;|&#91;-()_.!~*';/?:@\x26=+$,A-Za-z0-9&#93;)+)(&#91;).!';/?:,&#93;)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InvocationRateLimitPerSecond" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of invocations per second to specified for the API destination. Note that if you set the invocation rate maximum to a value lower the rate necessary to send all events received on to the destination HTTP endpoint, some events may not be delivered within the 24-hour retry window. If you plan to set the rate lower than the rate necessary to deliver all events, consider using a dead-letter queue to catch events that are not delivered within 24 hours.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp for the time that the API destination was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the API destination retrieved. (pattern: &lt;code&gt;&#91;\.\-_A-Za-z0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_api_destination"><CopyableCode code="describe_api_destination" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about an API destination.</td>
</tr>
<tr>
    <td><a href="#create_api_destination"><CopyableCode code="create_api_destination" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectionArn"><code>ConnectionArn</code></a>, <a href="#parameter-InvocationEndpoint"><code>InvocationEndpoint</code></a>, <a href="#parameter-HttpMethod"><code>HttpMethod</code></a></td>
    <td></td>
    <td>Creates an API destination, which is an HTTP invocation endpoint configured as a target for events. API destinations do not support private destinations, such as interface VPC endpoints. For more information, see API destinations in the EventBridge User Guide.</td>
</tr>
<tr>
    <td><a href="#update_api_destination"><CopyableCode code="update_api_destination" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an API destination.</td>
</tr>
<tr>
    <td><a href="#delete_api_destination"><CopyableCode code="delete_api_destination" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified API destination.</td>
</tr>
<tr>
    <td><a href="#list_api_destinations"><CopyableCode code="list_api_destinations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of API destination in the account in the current Region.</td>
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
    defaultValue="describe_api_destination"
    values={[
        { label: 'describe_api_destination', value: 'describe_api_destination' }
    ]}
>
<TabItem value="describe_api_destination">

Retrieves details about an API destination.

```sql
SELECT
ApiDestinationArn,
ApiDestinationState,
ConnectionArn,
CreationTime,
Description,
HttpMethod,
InvocationEndpoint,
InvocationRateLimitPerSecond,
LastModifiedTime,
Name
FROM aws.events.api_destinations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_api_destination"
    values={[
        { label: 'create_api_destination', value: 'create_api_destination' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_api_destination">

Creates an API destination, which is an HTTP invocation endpoint configured as a target for events. API destinations do not support private destinations, such as interface VPC endpoints. For more information, see API destinations in the EventBridge User Guide.

```sql
INSERT INTO aws.events.api_destinations (
Name,
Description,
ConnectionArn,
InvocationEndpoint,
HttpMethod,
InvocationRateLimitPerSecond,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ ConnectionArn }}' /* required */,
'{{ InvocationEndpoint }}' /* required */,
'{{ HttpMethod }}' /* required */,
{{ InvocationRateLimitPerSecond }},
'{{ region }}'
RETURNING
ApiDestinationArn,
ApiDestinationState,
CreationTime,
LastModifiedTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: api_destinations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the api_destinations resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name for the API destination to create.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the API destination to create.
    - name: ConnectionArn
      value: "{{ ConnectionArn }}"
      description: |
        The ARN of the connection to use for the API destination. The destination endpoint must support the authorization type specified for the connection.
    - name: InvocationEndpoint
      value: "{{ InvocationEndpoint }}"
      description: |
        The URL to the HTTP invocation endpoint for the API destination.
    - name: HttpMethod
      value: "{{ HttpMethod }}"
      description: |
        The method to use for the request to the HTTP invocation endpoint.
      valid_values: ['POST', 'GET', 'HEAD', 'OPTIONS', 'PUT', 'PATCH', 'DELETE']
    - name: InvocationRateLimitPerSecond
      value: {{ InvocationRateLimitPerSecond }}
      description: |
        The maximum number of requests per second to send to the HTTP invocation endpoint.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_api_destination"
    values={[
        { label: 'update_api_destination', value: 'update_api_destination' }
    ]}
>
<TabItem value="update_api_destination">

Updates an API destination.

```sql
UPDATE aws.events.api_destinations
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
ConnectionArn = '{{ ConnectionArn }}',
InvocationEndpoint = '{{ InvocationEndpoint }}',
HttpMethod = '{{ HttpMethod }}',
InvocationRateLimitPerSecond = {{ InvocationRateLimitPerSecond }}
WHERE 
region = '{{ region }}' --required
RETURNING
ApiDestinationArn,
ApiDestinationState,
CreationTime,
LastModifiedTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_api_destination"
    values={[
        { label: 'delete_api_destination', value: 'delete_api_destination' }
    ]}
>
<TabItem value="delete_api_destination">

Deletes the specified API destination.

```sql
DELETE FROM aws.events.api_destinations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_api_destinations"
    values={[
        { label: 'list_api_destinations', value: 'list_api_destinations' }
    ]}
>
<TabItem value="list_api_destinations">

Retrieves a list of API destination in the account in the current Region.

```sql
EXEC aws.events.api_destinations.list_api_destinations 
@region='{{ region }}' --required 
@@json=
'{
"NamePrefix": "{{ NamePrefix }}", 
"ConnectionArn": "{{ ConnectionArn }}", 
"NextToken": "{{ NextToken }}", 
"Limit": {{ Limit }}
}'
;
```
</TabItem>
</Tabs>
