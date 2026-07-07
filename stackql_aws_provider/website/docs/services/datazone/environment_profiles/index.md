--- 
title: environment_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_profiles
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

Creates, updates, deletes, gets or lists an <code>environment_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environment_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.environment_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_environment_profile"
    values={[
        { label: 'get_environment_profile', value: 'get_environment_profile' },
        { label: 'list_environment_profiles', value: 'list_environment_profiles' }
    ]}
>
<TabItem value="get_environment_profile">

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
    <td>The ID of the environment profile. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;0,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment profile. (pattern: &lt;code&gt;&#91;\w -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="awsAccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account where this environment profile exists. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="awsAccountRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services region where this environment profile exists. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;4,10&#125;-\d&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when this environment profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created this environment profile.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the environment profile.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which this environment profile exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentBlueprintId" /></td>
    <td><code>string</code></td>
    <td>The ID of the blueprint with which this environment profile is created. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone project in which this environment profile is created. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when this environment profile was upated.</td>
</tr>
<tr>
    <td><CopyableCode code="userParameters" /></td>
    <td><code>array</code></td>
    <td>The user parameters of the environment profile.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_environment_profiles">

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
    <td>The identifier of the environment profile. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;0,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment profile. (pattern: &lt;code&gt;&#91;\w -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="awsAccountId" /></td>
    <td><code>string</code></td>
    <td>The identifier of an Amazon Web Services account in which an environment profile exists. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="awsAccountRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region in which an environment profile exists. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;4,10&#125;-\d&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when an environment profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created the environment profile.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the environment profile.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone domain in which the environment profile exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentBlueprintId" /></td>
    <td><code>string</code></td>
    <td>The identifier of a blueprint with which an environment profile is created. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The identifier of a project in which an environment profile exists. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the environment profile was updated.</td>
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
    <td><a href="#get_environment_profile"><CopyableCode code="get_environment_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an evinronment profile in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#list_environment_profiles"><CopyableCode code="list_environment_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-awsAccountId"><code>awsAccountId</code></a>, <a href="#parameter-awsAccountRegion"><code>awsAccountRegion</code></a>, <a href="#parameter-environmentBlueprintIdentifier"><code>environmentBlueprintIdentifier</code></a>, <a href="#parameter-projectIdentifier"><code>projectIdentifier</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists Amazon DataZone environment profiles.</td>
</tr>
<tr>
    <td><a href="#create_environment_profile"><CopyableCode code="create_environment_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-environmentBlueprintIdentifier"><code>environmentBlueprintIdentifier</code></a>, <a href="#parameter-projectIdentifier"><code>projectIdentifier</code></a></td>
    <td></td>
    <td>Creates an Amazon DataZone environment profile.</td>
</tr>
<tr>
    <td><a href="#update_environment_profile"><CopyableCode code="update_environment_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified environment profile in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#delete_environment_profile"><CopyableCode code="delete_environment_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an environment profile in Amazon DataZone.</td>
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
    <td>The ID of the Amazon DataZone domain in which the environment profile is deleted.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment profile that is deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-awsAccountId">
    <td><CopyableCode code="awsAccountId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Web Services account where you want to list environment profiles.</td>
</tr>
<tr id="parameter-awsAccountRegion">
    <td><CopyableCode code="awsAccountRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services region where you want to list environment profiles.</td>
</tr>
<tr id="parameter-environmentBlueprintIdentifier">
    <td><CopyableCode code="environmentBlueprintIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the blueprint that was used to create the environment profiles that you want to list.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of environment profiles to return in a single call to ListEnvironmentProfiles. When the number of environment profiles to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListEnvironmentProfiles to list the next set of environment profiles.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of environment profiles is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of environment profiles, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListEnvironmentProfiles to list the next set of environment profiles.</td>
</tr>
<tr id="parameter-projectIdentifier">
    <td><CopyableCode code="projectIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone project.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_environment_profile"
    values={[
        { label: 'get_environment_profile', value: 'get_environment_profile' },
        { label: 'list_environment_profiles', value: 'list_environment_profiles' }
    ]}
>
<TabItem value="get_environment_profile">

Gets an evinronment profile in Amazon DataZone.

```sql
SELECT
id,
name,
awsAccountId,
awsAccountRegion,
createdAt,
createdBy,
description,
domainId,
environmentBlueprintId,
projectId,
updatedAt,
userParameters
FROM aws.datazone.environment_profiles
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_environment_profiles">

Lists Amazon DataZone environment profiles.

```sql
SELECT
id,
name,
awsAccountId,
awsAccountRegion,
createdAt,
createdBy,
description,
domainId,
environmentBlueprintId,
projectId,
updatedAt
FROM aws.datazone.environment_profiles
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND region = '{{ region }}' -- required
AND awsAccountId = '{{ awsAccountId }}'
AND awsAccountRegion = '{{ awsAccountRegion }}'
AND environmentBlueprintIdentifier = '{{ environmentBlueprintIdentifier }}'
AND projectIdentifier = '{{ projectIdentifier }}'
AND name = '{{ name }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_environment_profile"
    values={[
        { label: 'create_environment_profile', value: 'create_environment_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_environment_profile">

Creates an Amazon DataZone environment profile.

```sql
INSERT INTO aws.datazone.environment_profiles (
name,
description,
environmentBlueprintIdentifier,
projectIdentifier,
userParameters,
awsAccountId,
awsAccountRegion,
domain_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ environmentBlueprintIdentifier }}' /* required */,
'{{ projectIdentifier }}' /* required */,
'{{ userParameters }}',
'{{ awsAccountId }}',
'{{ awsAccountRegion }}',
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
id,
name,
awsAccountId,
awsAccountRegion,
createdAt,
createdBy,
description,
domainId,
environmentBlueprintId,
projectId,
updatedAt,
userParameters
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environment_profiles
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the environment_profiles resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the environment_profiles resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: environmentBlueprintIdentifier
      value: "{{ environmentBlueprintIdentifier }}"
    - name: projectIdentifier
      value: "{{ projectIdentifier }}"
    - name: userParameters
      value:
        - name: "{{ name }}"
          value: "{{ value }}"
    - name: awsAccountId
      value: "{{ awsAccountId }}"
    - name: awsAccountRegion
      value: "{{ awsAccountRegion }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_environment_profile"
    values={[
        { label: 'update_environment_profile', value: 'update_environment_profile' }
    ]}
>
<TabItem value="update_environment_profile">

Updates the specified environment profile in Amazon DataZone.

```sql
UPDATE aws.datazone.environment_profiles
SET 
name = '{{ name }}',
description = '{{ description }}',
userParameters = '{{ userParameters }}',
awsAccountId = '{{ awsAccountId }}',
awsAccountRegion = '{{ awsAccountRegion }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
awsAccountId,
awsAccountRegion,
createdAt,
createdBy,
description,
domainId,
environmentBlueprintId,
projectId,
updatedAt,
userParameters;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_environment_profile"
    values={[
        { label: 'delete_environment_profile', value: 'delete_environment_profile' }
    ]}
>
<TabItem value="delete_environment_profile">

Deletes an environment profile in Amazon DataZone.

```sql
DELETE FROM aws.datazone.environment_profiles
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
