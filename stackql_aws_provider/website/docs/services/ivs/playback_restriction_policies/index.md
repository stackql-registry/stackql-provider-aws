--- 
title: playback_restriction_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - playback_restriction_policies
  - ivs
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

Creates, updates, deletes, gets or lists a <code>playback_restriction_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="playback_restriction_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs.playback_restriction_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_playback_restriction_policy"
    values={[
        { label: 'get_playback_restriction_policy', value: 'get_playback_restriction_policy' },
        { label: 'list_playback_restriction_policies', value: 'list_playback_restriction_policies' }
    ]}
>
<TabItem value="get_playback_restriction_policy">

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
    <td>Playback-restriction-policy name. The value does not need to be unique. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="allowedCountries" /></td>
    <td><code>array</code></td>
    <td>A list of country codes that control geoblocking restriction. Allowed values are the officially assigned ISO 3166-1 alpha-2 codes. Default: All countries (an empty array).</td>
</tr>
<tr>
    <td><CopyableCode code="allowedOrigins" /></td>
    <td><code>array</code></td>
    <td>A list of origin sites that control CORS restriction. Allowed values are the same as valid values of the Origin header defined at https:​//developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin. Default: All origins (an empty array).</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Playback-restriction-policy ARN (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:playback-restriction-policy/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enableStrictOriginEnforcement" /></td>
    <td><code>boolean</code></td>
    <td>Whether channel playback is constrained by origin site. Default: false.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the resource. Array of 1-50 maps, each of the form string:string (key:value). See Best practices and strategies in Tagging Amazon Web Services Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_playback_restriction_policies">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If there are more channels than maxResults, use nextToken in the request to get the next set. (pattern: &lt;code&gt;&#91;a-zA-Z0-9+/=_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="playbackRestrictionPolicies" /></td>
    <td><code>array</code></td>
    <td>List of the matching policies.</td>
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
    <td><a href="#get_playback_restriction_policy"><CopyableCode code="get_playback_restriction_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified playback restriction policy.</td>
</tr>
<tr>
    <td><a href="#list_playback_restriction_policies"><CopyableCode code="list_playback_restriction_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets summary information about playback restriction policies.</td>
</tr>
<tr>
    <td><a href="#create_playback_restriction_policy"><CopyableCode code="create_playback_restriction_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new playback restriction policy, for constraining playback by countries and/or origins.</td>
</tr>
<tr>
    <td><a href="#update_playback_restriction_policy"><CopyableCode code="update_playback_restriction_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Updates a specified playback restriction policy.</td>
</tr>
<tr>
    <td><a href="#delete_playback_restriction_policy"><CopyableCode code="delete_playback_restriction_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified playback restriction policy.</td>
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
    defaultValue="get_playback_restriction_policy"
    values={[
        { label: 'get_playback_restriction_policy', value: 'get_playback_restriction_policy' },
        { label: 'list_playback_restriction_policies', value: 'list_playback_restriction_policies' }
    ]}
>
<TabItem value="get_playback_restriction_policy">

Gets the specified playback restriction policy.

```sql
SELECT
name,
allowedCountries,
allowedOrigins,
arn,
enableStrictOriginEnforcement,
tags
FROM aws.ivs.playback_restriction_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_playback_restriction_policies">

Gets summary information about playback restriction policies.

```sql
SELECT
nextToken,
playbackRestrictionPolicies
FROM aws.ivs.playback_restriction_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_playback_restriction_policy"
    values={[
        { label: 'create_playback_restriction_policy', value: 'create_playback_restriction_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_playback_restriction_policy">

Creates a new playback restriction policy, for constraining playback by countries and/or origins.

```sql
INSERT INTO aws.ivs.playback_restriction_policies (
allowedCountries,
allowedOrigins,
enableStrictOriginEnforcement,
name,
tags,
region
)
SELECT 
'{{ allowedCountries }}',
'{{ allowedOrigins }}',
{{ enableStrictOriginEnforcement }},
'{{ name }}',
'{{ tags }}',
'{{ region }}'
RETURNING
playbackRestrictionPolicy
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: playback_restriction_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the playback_restriction_policies resource.
    - name: allowedCountries
      value:
        - "{{ allowedCountries }}"
    - name: allowedOrigins
      value:
        - "{{ allowedOrigins }}"
    - name: enableStrictOriginEnforcement
      value: {{ enableStrictOriginEnforcement }}
    - name: name
      value: "{{ name }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_playback_restriction_policy"
    values={[
        { label: 'update_playback_restriction_policy', value: 'update_playback_restriction_policy' }
    ]}
>
<TabItem value="update_playback_restriction_policy">

Updates a specified playback restriction policy.

```sql
UPDATE aws.ivs.playback_restriction_policies
SET 
arn = '{{ arn }}',
allowedCountries = '{{ allowedCountries }}',
allowedOrigins = '{{ allowedOrigins }}',
enableStrictOriginEnforcement = {{ enableStrictOriginEnforcement }},
name = '{{ name }}'
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
RETURNING
playbackRestrictionPolicy;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_playback_restriction_policy"
    values={[
        { label: 'delete_playback_restriction_policy', value: 'delete_playback_restriction_policy' }
    ]}
>
<TabItem value="delete_playback_restriction_policy">

Deletes the specified playback restriction policy.

```sql
DELETE FROM aws.ivs.playback_restriction_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
