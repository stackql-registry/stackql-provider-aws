--- 
title: subscription_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - subscription_definitions
  - greengrass
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

Creates, updates, deletes, gets or lists a <code>subscription_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscription_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrass.subscription_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_subscription_definition"
    values={[
        { label: 'get_subscription_definition', value: 'get_subscription_definition' },
        { label: 'list_subscription_definitions', value: 'list_subscription_definitions' }
    ]}
>
<TabItem value="get_subscription_definition">

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
    <td>The ARN of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_timestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_timestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the definition was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_version" /></td>
    <td><code>string</code></td>
    <td>The ID of the latest version associated with the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_version_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the latest version associated with the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tag(s) attached to the resource arn.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_subscription_definitions">

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
    <td>The ARN of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_timestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_timestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the definition was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_version" /></td>
    <td><code>string</code></td>
    <td>The ID of the latest version associated with the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_version_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the latest version associated with the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tag(s) attached to the resource arn.</td>
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
    <td><a href="#get_subscription_definition"><CopyableCode code="get_subscription_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-subscription_definition_id"><code>subscription_definition_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a subscription definition.</td>
</tr>
<tr>
    <td><a href="#list_subscription_definitions"><CopyableCode code="list_subscription_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Retrieves a list of subscription definitions.</td>
</tr>
<tr>
    <td><a href="#create_subscription_definition"><CopyableCode code="create_subscription_definition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amzn-Client-Token"><code>X-Amzn-Client-Token</code></a></td>
    <td>Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.</td>
</tr>
<tr>
    <td><a href="#update_subscription_definition"><CopyableCode code="update_subscription_definition" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-subscription_definition_id"><code>subscription_definition_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a subscription definition.</td>
</tr>
<tr>
    <td><a href="#delete_subscription_definition"><CopyableCode code="delete_subscription_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-subscription_definition_id"><code>subscription_definition_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a subscription definition.</td>
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
<tr id="parameter-subscription_definition_id">
    <td><CopyableCode code="subscription_definition_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the subscription definition.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>string</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or ''null'' if there are no additional results.</td>
</tr>
<tr id="parameter-X-Amzn-Client-Token">
    <td><CopyableCode code="X-Amzn-Client-Token" /></td>
    <td><code>string</code></td>
    <td>A client token used to correlate requests and responses.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_subscription_definition"
    values={[
        { label: 'get_subscription_definition', value: 'get_subscription_definition' },
        { label: 'list_subscription_definitions', value: 'list_subscription_definitions' }
    ]}
>
<TabItem value="get_subscription_definition">

Retrieves information about a subscription definition.

```sql
SELECT
arn,
creation_timestamp,
id,
last_updated_timestamp,
latest_version,
latest_version_arn,
name,
tags
FROM aws.greengrass.subscription_definitions
WHERE subscription_definition_id = '{{ subscription_definition_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_subscription_definitions">

Retrieves a list of subscription definitions.

```sql
SELECT
arn,
creation_timestamp,
id,
last_updated_timestamp,
latest_version,
latest_version_arn,
name,
tags
FROM aws.greengrass.subscription_definitions
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_subscription_definition"
    values={[
        { label: 'create_subscription_definition', value: 'create_subscription_definition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_subscription_definition">

Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.

```sql
INSERT INTO aws.greengrass.subscription_definitions (
InitialVersion,
Name,
tags,
region,
`X-Amzn-Client-Token`
)
SELECT 
'{{ InitialVersion }}',
'{{ Name }}',
'{{ tags }}',
'{{ region }}',
'{{ X-Amzn-Client-Token }}'
RETURNING
arn,
creation_timestamp,
id,
last_updated_timestamp,
latest_version,
latest_version_arn,
name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: subscription_definitions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the subscription_definitions resource.
    - name: InitialVersion
      description: |
        Information about a subscription definition version.
      value:
        Subscriptions:
          - Id: "{{ Id }}"
            Source: "{{ Source }}"
            Subject: "{{ Subject }}"
            Target: "{{ Target }}"
    - name: Name
      value: "{{ Name }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        The key-value pair for the resource tag.
    - name: X-Amzn-Client-Token
      value: "{{ X-Amzn-Client-Token }}"
      description: A client token used to correlate requests and responses.
      description: A client token used to correlate requests and responses.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_subscription_definition"
    values={[
        { label: 'update_subscription_definition', value: 'update_subscription_definition' }
    ]}
>
<TabItem value="update_subscription_definition">

Updates a subscription definition.

```sql
UPDATE aws.greengrass.subscription_definitions
SET 
Name = '{{ Name }}'
WHERE 
subscription_definition_id = '{{ subscription_definition_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_subscription_definition"
    values={[
        { label: 'delete_subscription_definition', value: 'delete_subscription_definition' }
    ]}
>
<TabItem value="delete_subscription_definition">

Deletes a subscription definition.

```sql
DELETE FROM aws.greengrass.subscription_definitions
WHERE subscription_definition_id = '{{ subscription_definition_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
