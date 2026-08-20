--- 
title: ad_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - ad_configurations
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

Creates, updates, deletes, gets or lists an <code>ad_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ad_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs.ad_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ad_configuration"
    values={[
        { label: 'get_ad_configuration', value: 'get_ad_configuration' },
        { label: 'list_ad_configurations', value: 'list_ad_configurations' }
    ]}
>
<TabItem value="get_ad_configuration">

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
    <td>Ad configuration name. Defaults to “”. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Ad configuration ARN. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:ad-configuration/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="media_tailor_playback_configurations" /></td>
    <td><code>array</code></td>
    <td>List of integration configurations with MediaTailor resources. The first item in the list is the default playback configuration used for the ad configuration. To select a different configuration per viewing session, see Generate and Sign IVS Playback Tokens.</td>
</tr>
<tr>
    <td><CopyableCode code="post_roll_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for the post-roll ad break to use for this ad configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the resource. Array of 1-50 maps, each of the form string:string (key:value). See Best practices and strategies in Tagging Amazon Web Services Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ad_configurations">

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
    <td>Ad configuration name. Defaults to “”. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Ad configuration ARN. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:ad-configuration/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="media_tailor_playback_configurations" /></td>
    <td><code>array</code></td>
    <td>List of integration configurations with MediaTailor resources. The first item in the list is the default playback configuration used for the ad configuration. To select a different configuration per viewing session, see Generate and Sign IVS Playback Tokens.</td>
</tr>
<tr>
    <td><CopyableCode code="post_roll_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for the post-roll ad break to use for this ad configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the resource. Array of 1-50 maps, each of the form string:string (key:value). See Best practices and strategies in Tagging Amazon Web Services Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.</td>
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
    <td><a href="#get_ad_configuration"><CopyableCode code="get_ad_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the ad configuration represented by the specified ARN.</td>
</tr>
<tr>
    <td><a href="#list_ad_configurations"><CopyableCode code="list_ad_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets summary information about all ad configurations in your account, in the AWS region where the API request is processed.</td>
</tr>
<tr>
    <td><a href="#create_ad_configuration"><CopyableCode code="create_ad_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-mediaTailorPlaybackConfigurations"><code>mediaTailorPlaybackConfigurations</code></a></td>
    <td></td>
    <td>Creates a new ad configuration to be used for server-side ad insertion.</td>
</tr>
<tr>
    <td><a href="#update_ad_configuration"><CopyableCode code="update_ad_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Updates a specified ad configuration.</td>
</tr>
<tr>
    <td><a href="#delete_ad_configuration"><CopyableCode code="delete_ad_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified ad configuration.</td>
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
    defaultValue="get_ad_configuration"
    values={[
        { label: 'get_ad_configuration', value: 'get_ad_configuration' },
        { label: 'list_ad_configurations', value: 'list_ad_configurations' }
    ]}
>
<TabItem value="get_ad_configuration">

Gets the ad configuration represented by the specified ARN.

```sql
SELECT
name,
arn,
media_tailor_playback_configurations,
post_roll_configuration,
tags
FROM aws.ivs.ad_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ad_configurations">

Gets summary information about all ad configurations in your account, in the AWS region where the API request is processed.

```sql
SELECT
name,
arn,
media_tailor_playback_configurations,
post_roll_configuration,
tags
FROM aws.ivs.ad_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ad_configuration"
    values={[
        { label: 'create_ad_configuration', value: 'create_ad_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ad_configuration">

Creates a new ad configuration to be used for server-side ad insertion.

```sql
INSERT INTO aws.ivs.ad_configurations (
name,
mediaTailorPlaybackConfigurations,
postRollConfiguration,
tags,
region
)
SELECT 
'{{ name }}',
'{{ mediaTailorPlaybackConfigurations }}' /* required */,
'{{ postRollConfiguration }}',
'{{ tags }}',
'{{ region }}'
RETURNING
ad_configuration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ad_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ad_configurations resource.
    - name: name
      value: "{{ name }}"
    - name: mediaTailorPlaybackConfigurations
      value:
        - playbackConfigurationArn: "{{ playbackConfigurationArn }}"
    - name: postRollConfiguration
      description: |
        Configuration for the post-roll ad break to use for this ad configuration.
      value:
        durationSeconds: {{ durationSeconds }}
        enabled: {{ enabled }}
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ad_configuration"
    values={[
        { label: 'update_ad_configuration', value: 'update_ad_configuration' }
    ]}
>
<TabItem value="update_ad_configuration">

Updates a specified ad configuration.

```sql
UPDATE aws.ivs.ad_configurations
SET 
arn = '{{ arn }}',
name = '{{ name }}',
mediaTailorPlaybackConfigurations = '{{ mediaTailorPlaybackConfigurations }}',
postRollConfiguration = '{{ postRollConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
RETURNING
ad_configuration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ad_configuration"
    values={[
        { label: 'delete_ad_configuration', value: 'delete_ad_configuration' }
    ]}
>
<TabItem value="delete_ad_configuration">

Deletes the specified ad configuration.

```sql
DELETE FROM aws.ivs.ad_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
