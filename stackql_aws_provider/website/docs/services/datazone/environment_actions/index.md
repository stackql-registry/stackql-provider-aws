--- 
title: environment_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_actions
  - datazone
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

Creates, updates, deletes, gets or lists an <code>environment_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environment_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.environment_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_environment_action"
    values={[
        { label: 'get_environment_action', value: 'get_environment_action' },
        { label: 'list_environment_actions', value: 'list_environment_actions' }
    ]}
>
<TabItem value="get_environment_action">

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
    <td>The ID of the environment action. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment action.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the environment action.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which the environment action lives. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The environment ID of the environment action. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>The parameters of the environment action.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_environment_actions">

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
    <td>The ID of the environment action. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment action.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The environment action description.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone domain ID of the environment action. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The environment ID of the environment action. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>The parameters of the environment action.</td>
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
    <td><a href="#get_environment_action"><CopyableCode code="get_environment_action" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified environment action.</td>
</tr>
<tr>
    <td><a href="#list_environment_actions"><CopyableCode code="list_environment_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists existing environment actions.</td>
</tr>
<tr>
    <td><a href="#create_environment_action"><CopyableCode code="create_environment_action" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-parameters"><code>parameters</code></a></td>
    <td></td>
    <td>Creates an action for the environment, for example, creates a console link for an analytics tool that is available in this environment.</td>
</tr>
<tr>
    <td><a href="#update_environment_action"><CopyableCode code="update_environment_action" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an environment action.</td>
</tr>
<tr>
    <td><a href="#delete_environment_action"><CopyableCode code="delete_environment_action" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an action for the environment, for example, deletes a console link for an analytics tool that is available in this environment.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which an environment action is deleted.</td>
</tr>
<tr id="parameter-environment_identifier">
    <td><CopyableCode code="environment_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment where an environment action is deleted.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment action that is deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of environment actions to return in a single call to ListEnvironmentActions. When the number of environment actions to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListEnvironmentActions to list the next set of environment actions.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of environment actions is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of environment actions, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListEnvironmentActions to list the next set of environment actions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_environment_action"
    values={[
        { label: 'get_environment_action', value: 'get_environment_action' },
        { label: 'list_environment_actions', value: 'list_environment_actions' }
    ]}
>
<TabItem value="get_environment_action">

Gets the specified environment action.

```sql
SELECT
id,
name,
description,
domainId,
environmentId,
parameters
FROM aws.datazone.environment_actions
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND environment_identifier = '{{ environment_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_environment_actions">

Lists existing environment actions.

```sql
SELECT
id,
name,
description,
domainId,
environmentId,
parameters
FROM aws.datazone.environment_actions
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND environment_identifier = '{{ environment_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_environment_action"
    values={[
        { label: 'create_environment_action', value: 'create_environment_action' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_environment_action">

Creates an action for the environment, for example, creates a console link for an analytics tool that is available in this environment.

```sql
INSERT INTO aws.datazone.environment_actions (
name,
parameters,
description,
domain_identifier,
environment_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ parameters }}' /* required */,
'{{ description }}',
'{{ domain_identifier }}',
'{{ environment_identifier }}',
'{{ region }}'
RETURNING
id,
name,
description,
domainId,
environmentId,
parameters
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environment_actions
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the environment_actions resource.
    - name: environment_identifier
      value: "{{ environment_identifier }}"
      description: Required parameter for the environment_actions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the environment_actions resource.
    - name: name
      value: "{{ name }}"
    - name: parameters
      description: |
        The parameters of the environment action.
      value:
        awsConsoleLink:
          uri: "{{ uri }}"
    - name: description
      value: "{{ description }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_environment_action"
    values={[
        { label: 'update_environment_action', value: 'update_environment_action' }
    ]}
>
<TabItem value="update_environment_action">

Updates an environment action.

```sql
UPDATE aws.datazone.environment_actions
SET 
parameters = '{{ parameters }}',
name = '{{ name }}',
description = '{{ description }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND environment_identifier = '{{ environment_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
description,
domainId,
environmentId,
parameters;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_environment_action"
    values={[
        { label: 'delete_environment_action', value: 'delete_environment_action' }
    ]}
>
<TabItem value="delete_environment_action">

Deletes an action for the environment, for example, deletes a console link for an analytics tool that is available in this environment.

```sql
DELETE FROM aws.datazone.environment_actions
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND environment_identifier = '{{ environment_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
