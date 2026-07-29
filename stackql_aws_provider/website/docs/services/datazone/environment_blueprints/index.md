--- 
title: environment_blueprints
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_blueprints
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

Creates, updates, deletes, gets or lists an <code>environment_blueprints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environment_blueprints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.environment_blueprints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_environment_blueprint"
    values={[
        { label: 'get_environment_blueprint', value: 'get_environment_blueprint' },
        { label: 'list_environment_blueprints', value: 'list_environment_blueprints' }
    ]}
>
<TabItem value="get_environment_blueprint">

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
    <td>The ID of this Amazon DataZone blueprint. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this Amazon DataZone blueprint. (pattern: &lt;code&gt;&#91;\w -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when this blueprint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_properties" /></td>
    <td><code>object</code></td>
    <td>The deployment properties of this Amazon DataZone blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of this Amazon DataZone blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="glossary_terms" /></td>
    <td><code>array</code></td>
    <td>The glossary terms attached to this Amazon DataZone blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The provider of this Amazon DataZone blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_properties" /></td>
    <td><code>object</code></td>
    <td>The provisioning properties of an environment blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when this blueprint was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="user_parameters" /></td>
    <td><code>array</code></td>
    <td>The user parameters of this blueprint.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_environment_blueprints">

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
    <td>The identifier of the blueprint. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the blueprint. (pattern: &lt;code&gt;&#91;\w -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when an environment blueprint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of a blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The provider of the blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_properties" /></td>
    <td><code>object</code></td>
    <td>The provisioning properties of an environment blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the blueprint was enabled.</td>
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
    <td><a href="#get_environment_blueprint"><CopyableCode code="get_environment_blueprint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an Amazon DataZone blueprint.</td>
</tr>
<tr>
    <td><a href="#list_environment_blueprints"><CopyableCode code="list_environment_blueprints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-managed"><code>managed</code></a></td>
    <td>Lists blueprints in an Amazon DataZone environment.</td>
</tr>
<tr>
    <td><a href="#create_environment_blueprint"><CopyableCode code="create_environment_blueprint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-provisioningProperties"><code>provisioningProperties</code></a></td>
    <td></td>
    <td>Creates a Amazon DataZone blueprint.</td>
</tr>
<tr>
    <td><a href="#update_environment_blueprint"><CopyableCode code="update_environment_blueprint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an environment blueprint in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#delete_environment_blueprint"><CopyableCode code="delete_environment_blueprint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a blueprint in Amazon DataZone.</td>
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
    <td>The ID of the Amazon DataZone domain in which the blueprint is deleted.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the blueprint that is deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-managed">
    <td><CopyableCode code="managed" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the environment blueprint is managed by Amazon DataZone.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of blueprints to return in a single call to ListEnvironmentBlueprints. When the number of blueprints to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListEnvironmentBlueprints to list the next set of blueprints.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon DataZone environment.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of blueprints in the environment is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of blueprints in the environment, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListEnvironmentBlueprintsto list the next set of blueprints.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_environment_blueprint"
    values={[
        { label: 'get_environment_blueprint', value: 'get_environment_blueprint' },
        { label: 'list_environment_blueprints', value: 'list_environment_blueprints' }
    ]}
>
<TabItem value="get_environment_blueprint">

Gets an Amazon DataZone blueprint.

```sql
SELECT
id,
name,
created_at,
deployment_properties,
description,
glossary_terms,
provider,
provisioning_properties,
updated_at,
user_parameters
FROM aws.datazone.environment_blueprints
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_environment_blueprints">

Lists blueprints in an Amazon DataZone environment.

```sql
SELECT
id,
name,
created_at,
description,
provider,
provisioning_properties,
updated_at
FROM aws.datazone.environment_blueprints
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND name = '{{ name }}'
AND managed = '{{ managed }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_environment_blueprint"
    values={[
        { label: 'create_environment_blueprint', value: 'create_environment_blueprint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_environment_blueprint">

Creates a Amazon DataZone blueprint.

```sql
INSERT INTO aws.datazone.environment_blueprints (
name,
description,
provisioningProperties,
userParameters,
domain_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ provisioningProperties }}' /* required */,
'{{ userParameters }}',
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
id,
name,
created_at,
deployment_properties,
description,
glossary_terms,
provider,
provisioning_properties,
updated_at,
user_parameters
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environment_blueprints
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the environment_blueprints resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the environment_blueprints resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: provisioningProperties
      description: |
        The provisioning properties of an environment blueprint.
      value:
        cloudFormation:
          templateUrl: "{{ templateUrl }}"
    - name: userParameters
      value:
        - keyName: "{{ keyName }}"
          description: "{{ description }}"
          fieldType: "{{ fieldType }}"
          defaultValue: "{{ defaultValue }}"
          isEditable: {{ isEditable }}
          isOptional: {{ isOptional }}
          isUpdateSupported: {{ isUpdateSupported }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_environment_blueprint"
    values={[
        { label: 'update_environment_blueprint', value: 'update_environment_blueprint' }
    ]}
>
<TabItem value="update_environment_blueprint">

Updates an environment blueprint in Amazon DataZone.

```sql
UPDATE aws.datazone.environment_blueprints
SET 
description = '{{ description }}',
provisioningProperties = '{{ provisioningProperties }}',
userParameters = '{{ userParameters }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
created_at,
deployment_properties,
description,
glossary_terms,
provider,
provisioning_properties,
updated_at,
user_parameters;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_environment_blueprint"
    values={[
        { label: 'delete_environment_blueprint', value: 'delete_environment_blueprint' }
    ]}
>
<TabItem value="delete_environment_blueprint">

Deletes a blueprint in Amazon DataZone.

```sql
DELETE FROM aws.datazone.environment_blueprints
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
