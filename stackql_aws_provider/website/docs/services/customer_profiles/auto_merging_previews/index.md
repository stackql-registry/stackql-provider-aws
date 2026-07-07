--- 
title: auto_merging_previews
hide_title: false
hide_table_of_contents: false
keywords:
  - auto_merging_previews
  - customer_profiles
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

Creates, updates, deletes, gets or lists an <code>auto_merging_previews</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="auto_merging_previews" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.auto_merging_previews" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_auto_merging_preview"
    values={[
        { label: 'get_auto_merging_preview', value: 'get_auto_merging_preview' }
    ]}
>
<TabItem value="get_auto_merging_preview">

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
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfMatchesInSample" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of match groups in the domain that have been reviewed in this preview dry run.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfProfilesInSample" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of profiles found in this preview dry run.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfProfilesWillBeMerged" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of profiles that would be merged if this wasn't a preview dry run.</td>
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
    <td><a href="#get_auto_merging_preview"><CopyableCode code="get_auto_merging_preview" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Tests the auto-merging settings of your Identity Resolution Job without merging your data. It randomly selects a sample of matching groups from the existing matching results, and applies the automerging settings that you provided. You can then view the number of profiles in the sample, the number of matches, and the number of profiles identified to be merged. This enables you to evaluate the accuracy of the attributes in your matching list. You can't view which profiles are matched and would be merged. We strongly recommend you use this API to do a dry run of the automerging process before running the Identity Resolution Job. Include at least two matching attributes. If your matching list includes too few attributes (such as only FirstName or only LastName), there may be a large number of matches. This increases the chances of erroneous merges.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_auto_merging_preview"
    values={[
        { label: 'get_auto_merging_preview', value: 'get_auto_merging_preview' }
    ]}
>
<TabItem value="get_auto_merging_preview">

Tests the auto-merging settings of your Identity Resolution Job without merging your data. It randomly selects a sample of matching groups from the existing matching results, and applies the automerging settings that you provided. You can then view the number of profiles in the sample, the number of matches, and the number of profiles identified to be merged. This enables you to evaluate the accuracy of the attributes in your matching list. You can't view which profiles are matched and would be merged. We strongly recommend you use this API to do a dry run of the automerging process before running the Identity Resolution Job. Include at least two matching attributes. If your matching list includes too few attributes (such as only FirstName or only LastName), there may be a large number of matches. This increases the chances of erroneous merges.

```sql
SELECT
DomainName,
NumberOfMatchesInSample,
NumberOfProfilesInSample,
NumberOfProfilesWillBeMerged
FROM aws.customer_profiles.auto_merging_previews
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
