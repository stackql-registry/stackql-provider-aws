--- 
title: geo_match_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - geo_match_sets
  - waf
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

Creates, updates, deletes, gets or lists a <code>geo_match_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="geo_match_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.waf.geo_match_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_geo_match_set"
    values={[
        { label: 'get_geo_match_set', value: 'get_geo_match_set' },
        { label: 'list_geo_match_sets', value: 'list_geo_match_sets' }
    ]}
>
<TabItem value="get_geo_match_set">

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
    <td><CopyableCode code="GeoMatchConstraints" /></td>
    <td><code>array</code></td>
    <td>An array of GeoMatchConstraint objects, which contain the country that you want AWS WAF to search for.</td>
</tr>
<tr>
    <td><CopyableCode code="GeoMatchSetId" /></td>
    <td><code>string</code></td>
    <td>The GeoMatchSetId for an GeoMatchSet. You use GeoMatchSetId to get information about a GeoMatchSet (see GeoMatchSet), update a GeoMatchSet (see UpdateGeoMatchSet), insert a GeoMatchSet into a Rule or delete one from a Rule (see UpdateRule), and delete a GeoMatchSet from AWS WAF (see DeleteGeoMatchSet). GeoMatchSetId is returned by CreateGeoMatchSet and by ListGeoMatchSets. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A friendly name or description of the GeoMatchSet. You can't change the name of an GeoMatchSet after you create it. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_geo_match_sets">

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
    <td><CopyableCode code="GeoMatchSetId" /></td>
    <td><code>string</code></td>
    <td>The GeoMatchSetId for an GeoMatchSet. You can use GeoMatchSetId in a GetGeoMatchSet request to get detailed information about an GeoMatchSet. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A friendly name or description of the GeoMatchSet. You can't change the name of an GeoMatchSet after you create it. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_geo_match_set"><CopyableCode code="get_geo_match_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the GeoMatchSet that is specified by GeoMatchSetId.</td>
</tr>
<tr>
    <td><a href="#list_geo_match_sets"><CopyableCode code="list_geo_match_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of GeoMatchSetSummary objects in the response.</td>
</tr>
<tr>
    <td><a href="#create_geo_match_set"><CopyableCode code="create_geo_match_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates an GeoMatchSet, which you use to specify which web requests you want to allow or block based on the country that the requests originate from. For example, if you're receiving a lot of requests from one or more countries and you want to block the requests, you can create an GeoMatchSet that contains those countries and then configure AWS WAF to block the requests. To create and configure a GeoMatchSet, perform the following steps: Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a CreateGeoMatchSet request. Submit a CreateGeoMatchSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateGeoMatchSet request. Submit an UpdateGeoMatchSetSet request to specify the countries that you want AWS WAF to watch for. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_geo_match_set"><CopyableCode code="update_geo_match_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GeoMatchSetId"><code>GeoMatchSetId</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a>, <a href="#parameter-Updates"><code>Updates</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes GeoMatchConstraint objects in an GeoMatchSet. For each GeoMatchConstraint object, you specify the following values: Whether to insert or delete the object from the array. If you want to change an GeoMatchConstraint object, you delete the existing object and add a new one. The Type. The only valid value for Type is Country. The Value, which is a two character code for the country to add to the GeoMatchConstraint object. Valid codes are listed in GeoMatchConstraint$Value. To create and configure an GeoMatchSet, perform the following steps: Submit a CreateGeoMatchSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateGeoMatchSet request. Submit an UpdateGeoMatchSet request to specify the country that you want AWS WAF to watch for. When you update an GeoMatchSet, you specify the country that you want to add and/or the country that you want to delete. If you want to change a country, you delete the existing country and add the new one. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_geo_match_set"><CopyableCode code="delete_geo_match_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes a GeoMatchSet. You can't delete a GeoMatchSet if it's still used in any Rules or if it still includes any countries. If you just want to remove a GeoMatchSet from a Rule, use UpdateRule. To permanently delete a GeoMatchSet from AWS WAF, perform the following steps: Update the GeoMatchSet to remove any countries. For more information, see UpdateGeoMatchSet. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a DeleteGeoMatchSet request. Submit a DeleteGeoMatchSet request.</td>
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
    defaultValue="get_geo_match_set"
    values={[
        { label: 'get_geo_match_set', value: 'get_geo_match_set' },
        { label: 'list_geo_match_sets', value: 'list_geo_match_sets' }
    ]}
>
<TabItem value="get_geo_match_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the GeoMatchSet that is specified by GeoMatchSetId.

```sql
SELECT
GeoMatchConstraints,
GeoMatchSetId,
Name
FROM aws.waf.geo_match_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_geo_match_sets">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns an array of GeoMatchSetSummary objects in the response.

```sql
SELECT
GeoMatchSetId,
Name
FROM aws.waf.geo_match_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_geo_match_set"
    values={[
        { label: 'create_geo_match_set', value: 'create_geo_match_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_geo_match_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates an GeoMatchSet, which you use to specify which web requests you want to allow or block based on the country that the requests originate from. For example, if you're receiving a lot of requests from one or more countries and you want to block the requests, you can create an GeoMatchSet that contains those countries and then configure AWS WAF to block the requests. To create and configure a GeoMatchSet, perform the following steps: Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a CreateGeoMatchSet request. Submit a CreateGeoMatchSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateGeoMatchSet request. Submit an UpdateGeoMatchSetSet request to specify the countries that you want AWS WAF to watch for. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.

```sql
INSERT INTO aws.waf.geo_match_sets (
Name,
ChangeToken,
region
)
SELECT 
'{{ Name }}',
'{{ ChangeToken }}' /* required */,
'{{ region }}'
RETURNING
ChangeToken,
GeoMatchSet
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: geo_match_sets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the geo_match_sets resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A friendly name or description of the GeoMatchSet. You can't change Name after you create the GeoMatchSet.
    - name: ChangeToken
      value: "{{ ChangeToken }}"
      description: |
        The value returned by the most recent call to GetChangeToken.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_geo_match_set"
    values={[
        { label: 'update_geo_match_set', value: 'update_geo_match_set' }
    ]}
>
<TabItem value="update_geo_match_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes GeoMatchConstraint objects in an GeoMatchSet. For each GeoMatchConstraint object, you specify the following values: Whether to insert or delete the object from the array. If you want to change an GeoMatchConstraint object, you delete the existing object and add a new one. The Type. The only valid value for Type is Country. The Value, which is a two character code for the country to add to the GeoMatchConstraint object. Valid codes are listed in GeoMatchConstraint$Value. To create and configure an GeoMatchSet, perform the following steps: Submit a CreateGeoMatchSet request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateGeoMatchSet request. Submit an UpdateGeoMatchSet request to specify the country that you want AWS WAF to watch for. When you update an GeoMatchSet, you specify the country that you want to add and/or the country that you want to delete. If you want to change a country, you delete the existing country and add the new one. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.

```sql
UPDATE aws.waf.geo_match_sets
SET 
GeoMatchSetId = '{{ GeoMatchSetId }}',
ChangeToken = '{{ ChangeToken }}',
Updates = '{{ Updates }}'
WHERE 
region = '{{ region }}' --required
AND GeoMatchSetId = '{{ GeoMatchSetId }}' --required
AND ChangeToken = '{{ ChangeToken }}' --required
AND Updates = '{{ Updates }}' --required
RETURNING
ChangeToken;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_geo_match_set"
    values={[
        { label: 'delete_geo_match_set', value: 'delete_geo_match_set' }
    ]}
>
<TabItem value="delete_geo_match_set">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes a GeoMatchSet. You can't delete a GeoMatchSet if it's still used in any Rules or if it still includes any countries. If you just want to remove a GeoMatchSet from a Rule, use UpdateRule. To permanently delete a GeoMatchSet from AWS WAF, perform the following steps: Update the GeoMatchSet to remove any countries. For more information, see UpdateGeoMatchSet. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a DeleteGeoMatchSet request. Submit a DeleteGeoMatchSet request.

```sql
DELETE FROM aws.waf.geo_match_sets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
