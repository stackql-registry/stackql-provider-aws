--- 
title: listeners
hide_title: false
hide_table_of_contents: false
keywords:
  - listeners
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

Creates, updates, deletes, gets or lists a <code>listeners</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="listeners" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.vpc_lattice.listeners" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_listener"
    values={[
        { label: 'get_listener', value: 'get_listener' },
        { label: 'list_listeners', value: 'list_listeners' }
    ]}
>
<TabItem value="get_listener">

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
    <td>The ID of the listener. (pattern: &lt;code&gt;listener-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the listener. (pattern: &lt;code&gt;(?!listener-)(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the listener. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:service/svc-&#91;0-9a-z&#93;&#123;17&#125;/listener/listener-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the listener was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultAction" /></td>
    <td><code>object</code></td>
    <td>Describes the action for a rule.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the listener was last updated, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The listener port.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The listener protocol. (HTTP, HTTPS, TLS_PASSTHROUGH)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:service/svc-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the service. (pattern: &lt;code&gt;svc-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_listeners">

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
    <td>The ID of the listener. (pattern: &lt;code&gt;listener-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the listener. (pattern: &lt;code&gt;(?!listener-)(?!&#91;-&#93;)(?!.*&#91;-&#93;$)(?!.*&#91;-&#93;&#123;2&#125;)&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the listener. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:service/svc-&#91;0-9a-z&#93;&#123;17&#125;/listener/listener-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the listener was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the listener was last updated, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The listener port.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The listener protocol. (HTTP, HTTPS, TLS_PASSTHROUGH)</td>
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
    <td><a href="#get_listener"><CopyableCode code="get_listener" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_identifier"><code>service_identifier</code></a>, <a href="#parameter-listener_identifier"><code>listener_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified listener for the specified service.</td>
</tr>
<tr>
    <td><a href="#list_listeners"><CopyableCode code="list_listeners" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_identifier"><code>service_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the listeners for the specified service.</td>
</tr>
<tr>
    <td><a href="#create_listener"><CopyableCode code="create_listener" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_identifier"><code>service_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-protocol"><code>protocol</code></a>, <a href="#parameter-defaultAction"><code>defaultAction</code></a></td>
    <td></td>
    <td>Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must add one or more listeners. A listener is a process that checks for connection requests to your services. For more information, see Listeners in the Amazon VPC Lattice User Guide.</td>
</tr>
<tr>
    <td><a href="#update_listener"><CopyableCode code="update_listener" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_identifier"><code>service_identifier</code></a>, <a href="#parameter-listener_identifier"><code>listener_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-defaultAction"><code>defaultAction</code></a></td>
    <td></td>
    <td>Updates the specified listener for the specified service.</td>
</tr>
<tr>
    <td><a href="#delete_listener"><CopyableCode code="delete_listener" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_identifier"><code>service_identifier</code></a>, <a href="#parameter-listener_identifier"><code>listener_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified listener.</td>
</tr>
<tr>
    <td><a href="#batch_update_rule"><CopyableCode code="batch_update_rule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-service_identifier"><code>service_identifier</code></a>, <a href="#parameter-listener_identifier"><code>listener_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-rules"><code>rules</code></a></td>
    <td></td>
    <td>Updates the listener rules in a batch. You can use this operation to change the priority of listener rules. This can be useful when bulk updating or swapping rule priority. Required permissions: vpc-lattice:UpdateRule For more information, see How Amazon VPC Lattice works with IAM in the Amazon VPC Lattice User Guide.</td>
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
<tr id="parameter-listener_identifier">
    <td><CopyableCode code="listener_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the listener.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-service_identifier">
    <td><CopyableCode code="service_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the service.</td>
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
    defaultValue="get_listener"
    values={[
        { label: 'get_listener', value: 'get_listener' },
        { label: 'list_listeners', value: 'list_listeners' }
    ]}
>
<TabItem value="get_listener">

Retrieves information about the specified listener for the specified service.

```sql
SELECT
id,
name,
arn,
createdAt,
defaultAction,
lastUpdatedAt,
port,
protocol,
serviceArn,
serviceId
FROM aws.vpc_lattice.listeners
WHERE service_identifier = '{{ service_identifier }}' -- required
AND listener_identifier = '{{ listener_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_listeners">

Lists the listeners for the specified service.

```sql
SELECT
id,
name,
arn,
createdAt,
lastUpdatedAt,
port,
protocol
FROM aws.vpc_lattice.listeners
WHERE service_identifier = '{{ service_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_listener"
    values={[
        { label: 'create_listener', value: 'create_listener' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_listener">

Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must add one or more listeners. A listener is a process that checks for connection requests to your services. For more information, see Listeners in the Amazon VPC Lattice User Guide.

```sql
INSERT INTO aws.vpc_lattice.listeners (
name,
protocol,
port,
defaultAction,
clientToken,
tags,
service_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ protocol }}' /* required */,
{{ port }},
'{{ defaultAction }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ service_identifier }}',
'{{ region }}'
RETURNING
id,
name,
arn,
defaultAction,
port,
protocol,
serviceArn,
serviceId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: listeners
  props:
    - name: service_identifier
      value: "{{ service_identifier }}"
      description: Required parameter for the listeners resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the listeners resource.
    - name: name
      value: "{{ name }}"
    - name: protocol
      value: "{{ protocol }}"
      valid_values: ['HTTP', 'HTTPS', 'TLS_PASSTHROUGH']
    - name: port
      value: {{ port }}
    - name: defaultAction
      description: |
        Describes the action for a rule.
      value:
        forward:
          targetGroups:
            - targetGroupIdentifier: "{{ targetGroupIdentifier }}"
              weight: {{ weight }}
        fixedResponse:
          statusCode: {{ statusCode }}
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_listener"
    values={[
        { label: 'update_listener', value: 'update_listener' }
    ]}
>
<TabItem value="update_listener">

Updates the specified listener for the specified service.

```sql
UPDATE aws.vpc_lattice.listeners
SET 
defaultAction = '{{ defaultAction }}'
WHERE 
service_identifier = '{{ service_identifier }}' --required
AND listener_identifier = '{{ listener_identifier }}' --required
AND region = '{{ region }}' --required
AND defaultAction = '{{ defaultAction }}' --required
RETURNING
id,
name,
arn,
defaultAction,
port,
protocol,
serviceArn,
serviceId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_listener"
    values={[
        { label: 'delete_listener', value: 'delete_listener' }
    ]}
>
<TabItem value="delete_listener">

Deletes the specified listener.

```sql
DELETE FROM aws.vpc_lattice.listeners
WHERE service_identifier = '{{ service_identifier }}' --required
AND listener_identifier = '{{ listener_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_update_rule"
    values={[
        { label: 'batch_update_rule', value: 'batch_update_rule' }
    ]}
>
<TabItem value="batch_update_rule">

Updates the listener rules in a batch. You can use this operation to change the priority of listener rules. This can be useful when bulk updating or swapping rule priority. Required permissions: vpc-lattice:UpdateRule For more information, see How Amazon VPC Lattice works with IAM in the Amazon VPC Lattice User Guide.

```sql
EXEC aws.vpc_lattice.listeners.batch_update_rule 
@service_identifier='{{ service_identifier }}' --required, 
@listener_identifier='{{ listener_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"rules": "{{ rules }}"
}'
;
```
</TabItem>
</Tabs>
