--- 
title: managed_rule_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_rule_sets
  - wafv2
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

Creates, updates, deletes, gets or lists a <code>managed_rule_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_rule_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wafv2.managed_rule_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_managed_rule_set"
    values={[
        { label: 'get_managed_rule_set', value: 'get_managed_rule_set' },
        { label: 'list_managed_rule_sets', value: 'list_managed_rule_sets' }
    ]}
>
<TabItem value="get_managed_rule_set">

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
    <td><CopyableCode code="lock_token" /></td>
    <td><code>string</code></td>
    <td>A token used for optimistic locking. WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-(?:&#91;0-9a-f&#93;&#123;4&#125;-)&#123;3&#125;&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="managed_rule_set" /></td>
    <td><code>object</code></td>
    <td>The managed rule set that you requested.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_managed_rule_sets">

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
    <td><CopyableCode code="managed_rule_sets" /></td>
    <td><code>array</code></td>
    <td>Your managed rule sets. If you specified a Limit in your request, this might not be the full list.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_managed_rule_set"><CopyableCode code="get_managed_rule_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified managed rule set. This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are ListManagedRuleSets, GetManagedRuleSet, PutManagedRuleSetVersions, and UpdateManagedRuleSetVersionExpiryDate.</td>
</tr>
<tr>
    <td><a href="#list_managed_rule_sets"><CopyableCode code="list_managed_rule_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the managed rule sets that you own. This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are ListManagedRuleSets, GetManagedRuleSet, PutManagedRuleSetVersions, and UpdateManagedRuleSetVersionExpiryDate.</td>
</tr>
<tr>
    <td><a href="#update_managed_rule_set_version_expiry_date"><CopyableCode code="update_managed_rule_set_version_expiry_date" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Scope"><code>Scope</code></a>, <a href="#parameter-Id"><code>Id</code></a>, <a href="#parameter-LockToken"><code>LockToken</code></a>, <a href="#parameter-VersionToExpire"><code>VersionToExpire</code></a>, <a href="#parameter-ExpiryTimestamp"><code>ExpiryTimestamp</code></a></td>
    <td></td>
    <td>Updates the expiration information for your managed rule set. Use this to initiate the expiration of a managed rule group version. After you initiate expiration for a version, WAF excludes it from the response to ListAvailableManagedRuleGroupVersions for the managed rule group. This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are ListManagedRuleSets, GetManagedRuleSet, PutManagedRuleSetVersions, and UpdateManagedRuleSetVersionExpiryDate.</td>
</tr>
<tr>
    <td><a href="#put_managed_rule_set_versions"><CopyableCode code="put_managed_rule_set_versions" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Scope"><code>Scope</code></a>, <a href="#parameter-Id"><code>Id</code></a>, <a href="#parameter-LockToken"><code>LockToken</code></a></td>
    <td></td>
    <td>Defines the versions of your managed rule set that you are offering to the customers. Customers see your offerings as managed rule groups with versioning. This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are ListManagedRuleSets, GetManagedRuleSet, PutManagedRuleSetVersions, and UpdateManagedRuleSetVersionExpiryDate. Customers retrieve their managed rule group list by calling ListAvailableManagedRuleGroups. The name that you provide here for your managed rule set is the name the customer sees for the corresponding managed rule group. Customers can retrieve the available versions for a managed rule group by calling ListAvailableManagedRuleGroupVersions. You provide a rule group specification for each version. For each managed rule set, you must specify a version that you recommend using. To initiate the expiration of a managed rule group version, use UpdateManagedRuleSetVersionExpiryDate.</td>
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
    defaultValue="get_managed_rule_set"
    values={[
        { label: 'get_managed_rule_set', value: 'get_managed_rule_set' },
        { label: 'list_managed_rule_sets', value: 'list_managed_rule_sets' }
    ]}
>
<TabItem value="get_managed_rule_set">

Retrieves the specified managed rule set. This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are ListManagedRuleSets, GetManagedRuleSet, PutManagedRuleSetVersions, and UpdateManagedRuleSetVersionExpiryDate.

```sql
SELECT
lock_token,
managed_rule_set
FROM aws.wafv2.managed_rule_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_managed_rule_sets">

Retrieves the managed rule sets that you own. This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are ListManagedRuleSets, GetManagedRuleSet, PutManagedRuleSetVersions, and UpdateManagedRuleSetVersionExpiryDate.

```sql
SELECT
managed_rule_sets,
next_marker
FROM aws.wafv2.managed_rule_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_managed_rule_set_version_expiry_date"
    values={[
        { label: 'update_managed_rule_set_version_expiry_date', value: 'update_managed_rule_set_version_expiry_date' }
    ]}
>
<TabItem value="update_managed_rule_set_version_expiry_date">

Updates the expiration information for your managed rule set. Use this to initiate the expiration of a managed rule group version. After you initiate expiration for a version, WAF excludes it from the response to ListAvailableManagedRuleGroupVersions for the managed rule group. This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are ListManagedRuleSets, GetManagedRuleSet, PutManagedRuleSetVersions, and UpdateManagedRuleSetVersionExpiryDate.

```sql
UPDATE aws.wafv2.managed_rule_sets
SET 
Name = '{{ Name }}',
Scope = '{{ Scope }}',
Id = '{{ Id }}',
LockToken = '{{ LockToken }}',
VersionToExpire = '{{ VersionToExpire }}',
ExpiryTimestamp = '{{ ExpiryTimestamp }}'
WHERE 
region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
AND Scope = '{{ Scope }}' --required
AND Id = '{{ Id }}' --required
AND LockToken = '{{ LockToken }}' --required
AND VersionToExpire = '{{ VersionToExpire }}' --required
AND ExpiryTimestamp = '{{ ExpiryTimestamp }}' --required
RETURNING
expiring_version,
expiry_timestamp,
next_lock_token;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_managed_rule_set_versions"
    values={[
        { label: 'put_managed_rule_set_versions', value: 'put_managed_rule_set_versions' }
    ]}
>
<TabItem value="put_managed_rule_set_versions">

Defines the versions of your managed rule set that you are offering to the customers. Customers see your offerings as managed rule groups with versioning. This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are ListManagedRuleSets, GetManagedRuleSet, PutManagedRuleSetVersions, and UpdateManagedRuleSetVersionExpiryDate. Customers retrieve their managed rule group list by calling ListAvailableManagedRuleGroups. The name that you provide here for your managed rule set is the name the customer sees for the corresponding managed rule group. Customers can retrieve the available versions for a managed rule group by calling ListAvailableManagedRuleGroupVersions. You provide a rule group specification for each version. For each managed rule set, you must specify a version that you recommend using. To initiate the expiration of a managed rule group version, use UpdateManagedRuleSetVersionExpiryDate.

```sql
REPLACE aws.wafv2.managed_rule_sets
SET 
Name = '{{ Name }}',
Scope = '{{ Scope }}',
Id = '{{ Id }}',
LockToken = '{{ LockToken }}',
RecommendedVersion = '{{ RecommendedVersion }}',
VersionsToPublish = '{{ VersionsToPublish }}'
WHERE 
region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
AND Scope = '{{ Scope }}' --required
AND Id = '{{ Id }}' --required
AND LockToken = '{{ LockToken }}' --required
RETURNING
next_lock_token;
```
</TabItem>
</Tabs>
