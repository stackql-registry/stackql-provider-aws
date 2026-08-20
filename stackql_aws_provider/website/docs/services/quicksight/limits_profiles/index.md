--- 
title: limits_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - limits_profiles
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>limits_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="limits_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.limits_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_limits_profile"
    values={[
        { label: 'describe_limits_profile', value: 'describe_limits_profile' },
        { label: 'list_limits_profiles', value: 'list_limits_profiles' }
    ]}
>
<TabItem value="describe_limits_profile">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the limits profile. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the limits profile.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the limits profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the limits profile.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the limits profile. (pattern: &lt;code&gt;lp-&#91;a-f0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the limits profile.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_limits" /></td>
    <td><code>object</code></td>
    <td>A map of resource types to their limit values.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the limits profile was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_limits_profiles">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the limits profile. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the limits profile.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the limits profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the limits profile.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the limits profile. (pattern: &lt;code&gt;lp-&#91;a-f0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the limits profile.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_limits" /></td>
    <td><code>object</code></td>
    <td>A map of resource types to their limit values.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the limits profile was last updated.</td>
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
    <td><a href="#describe_limits_profile"><CopyableCode code="describe_limits_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profile_id"><code>profile_id</code></a>, <a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the properties of an existing limits profile.</td>
</tr>
<tr>
    <td><a href="#list_limits_profiles"><CopyableCode code="list_limits_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all limits profiles in an Amazon Quick Sight account. Results are paginated. Use the maxResults parameter to limit the number of results returned in a single call, and use the nextToken parameter to retrieve the next page of results.</td>
</tr>
<tr>
    <td><a href="#create_limits_profile"><CopyableCode code="create_limits_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-profileName"><code>profileName</code></a>, <a href="#parameter-resourceLimits"><code>resourceLimits</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Creates a limits profile that defines resource usage limits for Amazon Quick Sight users.</td>
</tr>
<tr>
    <td><a href="#update_limits_profile"><CopyableCode code="update_limits_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-profile_id"><code>profile_id</code></a>, <a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the properties of an existing limits profile.</td>
</tr>
<tr>
    <td><a href="#delete_limits_profile"><CopyableCode code="delete_limits_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-profile_id"><code>profile_id</code></a>, <a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a limits profile.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the limits profile.</td>
</tr>
<tr id="parameter-profile_id">
    <td><CopyableCode code="profile_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the limits profile to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. If you don't specify a value, the service uses the default maximum.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
<tr id="parameter-resourceType">
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>An optional filter that limits the results to profiles that contain the specified resource type. If you don't specify a value, the operation returns all profiles.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_limits_profile"
    values={[
        { label: 'describe_limits_profile', value: 'describe_limits_profile' },
        { label: 'list_limits_profiles', value: 'list_limits_profiles' }
    ]}
>
<TabItem value="describe_limits_profile">

Describes the properties of an existing limits profile.

```sql
SELECT
account_id,
arn,
created_at,
description,
profile_id,
profile_name,
resource_limits,
updated_at
FROM aws.quicksight.limits_profiles
WHERE profile_id = '{{ profile_id }}' -- required
AND account_id = '{{ account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_limits_profiles">

Lists all limits profiles in an Amazon Quick Sight account. Results are paginated. Use the maxResults parameter to limit the number of results returned in a single call, and use the nextToken parameter to retrieve the next page of results.

```sql
SELECT
account_id,
arn,
created_at,
description,
profile_id,
profile_name,
resource_limits,
updated_at
FROM aws.quicksight.limits_profiles
WHERE account_id = '{{ account_id }}' -- required
AND region = '{{ region }}' -- required
AND resourceType = '{{ resourceType }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_limits_profile"
    values={[
        { label: 'create_limits_profile', value: 'create_limits_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_limits_profile">

Creates a limits profile that defines resource usage limits for Amazon Quick Sight users.

```sql
INSERT INTO aws.quicksight.limits_profiles (
profileName,
description,
resourceLimits,
clientToken,
account_id,
region
)
SELECT 
'{{ profileName }}' /* required */,
'{{ description }}',
'{{ resourceLimits }}' /* required */,
'{{ clientToken }}' /* required */,
'{{ account_id }}',
'{{ region }}'
RETURNING
arn,
profile_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: limits_profiles
  props:
    - name: account_id
      value: "{{ account_id }}"
      description: Required parameter for the limits_profiles resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the limits_profiles resource.
    - name: profileName
      value: "{{ profileName }}"
    - name: description
      value: "{{ description }}"
    - name: resourceLimits
      value: "{{ resourceLimits }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_limits_profile"
    values={[
        { label: 'update_limits_profile', value: 'update_limits_profile' }
    ]}
>
<TabItem value="update_limits_profile">

Updates the properties of an existing limits profile.

```sql
UPDATE aws.quicksight.limits_profiles
SET 
profileName = '{{ profileName }}',
description = '{{ description }}',
resourceLimits = '{{ resourceLimits }}'
WHERE 
profile_id = '{{ profile_id }}' --required
AND account_id = '{{ account_id }}' --required
AND region = '{{ region }}' --required
RETURNING
arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_limits_profile"
    values={[
        { label: 'delete_limits_profile', value: 'delete_limits_profile' }
    ]}
>
<TabItem value="delete_limits_profile">

Deletes a limits profile.

```sql
DELETE FROM aws.quicksight.limits_profiles
WHERE profile_id = '{{ profile_id }}' --required
AND account_id = '{{ account_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
