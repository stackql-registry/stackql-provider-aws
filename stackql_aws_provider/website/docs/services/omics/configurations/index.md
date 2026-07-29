--- 
title: configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - configurations
  - omics
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

Creates, updates, deletes, gets or lists a <code>configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configuration"
    values={[
        { label: 'get_configuration', value: 'get_configuration' },
        { label: 'list_configurations', value: 'list_configurations' }
    ]}
>
<TabItem value="get_configuration">

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
    <td>User-friendly name for the configuration. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9\-\._&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Unique resource identifier for the configuration. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Configuration creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description for the configuration. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="run_configurations" /></td>
    <td><code>object</code></td>
    <td>Run-specific configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current configuration status. (CREATING, ACTIVE, UPDATING, DELETING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags for the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the configuration. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configurations">

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
    <td>User-friendly name for the configuration. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9\-\._&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Unique resource identifier for the configuration. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Configuration creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description for the configuration. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current configuration status. (CREATING, ACTIVE, UPDATING, DELETING, DELETED, FAILED)</td>
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
    <td><a href="#get_configuration"><CopyableCode code="get_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve configuration details for specified name.</td>
</tr>
<tr>
    <td><a href="#list_configurations"><CopyableCode code="list_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-startingToken"><code>startingToken</code></a></td>
    <td>List all configurations for the account.</td>
</tr>
<tr>
    <td><a href="#create_configuration"><CopyableCode code="create_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-runConfigurations"><code>runConfigurations</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td></td>
    <td>Create a new configuration.</td>
</tr>
<tr>
    <td><a href="#delete_configuration"><CopyableCode code="delete_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an existing configuration.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Configuration name to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of results to return.</td>
</tr>
<tr id="parameter-startingToken">
    <td><CopyableCode code="startingToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token for retrieving next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_configuration"
    values={[
        { label: 'get_configuration', value: 'get_configuration' },
        { label: 'list_configurations', value: 'list_configurations' }
    ]}
>
<TabItem value="get_configuration">

Retrieve configuration details for specified name.

```sql
SELECT
name,
arn,
creation_time,
description,
run_configurations,
status,
tags,
uuid
FROM aws.omics.configurations
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configurations">

List all configurations for the account.

```sql
SELECT
name,
arn,
creation_time,
description,
status
FROM aws.omics.configurations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND startingToken = '{{ startingToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_configuration"
    values={[
        { label: 'create_configuration', value: 'create_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_configuration">

Create a new configuration.

```sql
INSERT INTO aws.omics.configurations (
name,
description,
runConfigurations,
tags,
requestId,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ runConfigurations }}' /* required */,
'{{ tags }}',
'{{ requestId }}' /* required */,
'{{ region }}'
RETURNING
name,
arn,
creation_time,
description,
run_configurations,
status,
tags,
uuid
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configurations resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: runConfigurations
      description: |
        Run-specific configuration settings.
      value:
        vpcConfig:
          securityGroupIds:
            - "{{ securityGroupIds }}"
          subnetIds:
            - "{{ subnetIds }}"
    - name: tags
      value: "{{ tags }}"
    - name: requestId
      value: "{{ requestId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configuration"
    values={[
        { label: 'delete_configuration', value: 'delete_configuration' }
    ]}
>
<TabItem value="delete_configuration">

Delete an existing configuration.

```sql
DELETE FROM aws.omics.configurations
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
