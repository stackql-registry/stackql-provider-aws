--- 
title: rules
hide_title: false
hide_table_of_contents: false
keywords:
  - rules
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

Creates, updates, deletes, gets or lists a <code>rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_rules"
    values={[
        { label: 'list_rules', value: 'list_rules' },
        { label: 'get_rule', value: 'get_rule' }
    ]}
>
<TabItem value="list_rules">

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
    <td>The name of the rule. (pattern: &lt;code&gt;&#91;\w -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action of the rule. (CREATE_LISTING_CHANGE_SET, CREATE_SUBSCRIPTION_REQUEST)</td>
</tr>
<tr>
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the rule. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedBy" /></td>
    <td><code>string</code></td>
    <td>The timestamp at which the rule was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The revision of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleType" /></td>
    <td><code>string</code></td>
    <td>The type of the rule. (METADATA_FORM_ENFORCEMENT, GLOSSARY_TERM_ENFORCEMENT)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>object</code></td>
    <td>The scope of a rule.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>The target of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="targetType" /></td>
    <td><code>string</code></td>
    <td>The target type of the rule. (DOMAIN_UNIT)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the rule was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_rule">

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
    <td>The name of the rule. (pattern: &lt;code&gt;&#91;\w -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action of the rule. (CREATE_LISTING_CHANGE_SET, CREATE_SUBSCRIPTION_REQUEST)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user who created the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="detail" /></td>
    <td><code>object</code></td>
    <td>The details of a rule.</td>
</tr>
<tr>
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the rule. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedBy" /></td>
    <td><code>string</code></td>
    <td>The timestamp at which the rule was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The revision of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleType" /></td>
    <td><code>string</code></td>
    <td>The type of the rule. (METADATA_FORM_ENFORCEMENT, GLOSSARY_TERM_ENFORCEMENT)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>object</code></td>
    <td>The scope of a rule.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>The target of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="targetType" /></td>
    <td><code>string</code></td>
    <td>The target type of the rule. (DOMAIN_UNIT)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the rule was last updated.</td>
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
    <td><a href="#list_rules"><CopyableCode code="list_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-target_type"><code>target_type</code></a>, <a href="#parameter-target_identifier"><code>target_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ruleType"><code>ruleType</code></a>, <a href="#parameter-ruleAction"><code>ruleAction</code></a>, <a href="#parameter-projectIds"><code>projectIds</code></a>, <a href="#parameter-assetTypes"><code>assetTypes</code></a>, <a href="#parameter-dataProduct"><code>dataProduct</code></a>, <a href="#parameter-includeCascaded"><code>includeCascaded</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists existing rules. In Amazon DataZone, a rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards.</td>
</tr>
<tr>
    <td><a href="#get_rule"><CopyableCode code="get_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-revision"><code>revision</code></a></td>
    <td>Gets the details of a rule in Amazon DataZone. A rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards.</td>
</tr>
<tr>
    <td><a href="#create_rule"><CopyableCode code="create_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-target"><code>target</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-detail"><code>detail</code></a></td>
    <td></td>
    <td>Creates a rule in Amazon DataZone. A rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards.</td>
</tr>
<tr>
    <td><a href="#update_rule"><CopyableCode code="update_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a rule. In Amazon DataZone, a rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards.</td>
</tr>
<tr>
    <td><a href="#delete_rule"><CopyableCode code="delete_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a rule in Amazon DataZone. A rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards.</td>
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
    <td>The ID of the domain that where the rule is to be deleted.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the rule that is to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-target_identifier">
    <td><CopyableCode code="target_identifier" /></td>
    <td><code>string</code></td>
    <td>The target ID of the rule.</td>
</tr>
<tr id="parameter-target_type">
    <td><CopyableCode code="target_type" /></td>
    <td><code>string</code></td>
    <td>The target type of the rule.</td>
</tr>
<tr id="parameter-assetTypes">
    <td><CopyableCode code="assetTypes" /></td>
    <td><code>array</code></td>
    <td>The asset types of the rule.</td>
</tr>
<tr id="parameter-dataProduct">
    <td><CopyableCode code="dataProduct" /></td>
    <td><code>boolean</code></td>
    <td>The data product of the rule.</td>
</tr>
<tr id="parameter-includeCascaded">
    <td><CopyableCode code="includeCascaded" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to include cascading rules in the results.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of rules to return in a single call to ListRules. When the number of rules to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListRules to list the next set of rules.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of rules is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of rules, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListRules to list the next set of rules.</td>
</tr>
<tr id="parameter-projectIds">
    <td><CopyableCode code="projectIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of projects in which rules are to be listed.</td>
</tr>
<tr id="parameter-revision">
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The revision of the rule.</td>
</tr>
<tr id="parameter-ruleAction">
    <td><CopyableCode code="ruleAction" /></td>
    <td><code>string</code></td>
    <td>The action of the rule.</td>
</tr>
<tr id="parameter-ruleType">
    <td><CopyableCode code="ruleType" /></td>
    <td><code>string</code></td>
    <td>The type of the rule.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_rules"
    values={[
        { label: 'list_rules', value: 'list_rules' },
        { label: 'get_rule', value: 'get_rule' }
    ]}
>
<TabItem value="list_rules">

Lists existing rules. In Amazon DataZone, a rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards.

```sql
SELECT
name,
action,
identifier,
lastUpdatedBy,
revision,
ruleType,
scope,
target,
targetType,
updatedAt
FROM aws.datazone.rules
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND target_type = '{{ target_type }}' -- required
AND target_identifier = '{{ target_identifier }}' -- required
AND region = '{{ region }}' -- required
AND ruleType = '{{ ruleType }}'
AND ruleAction = '{{ ruleAction }}'
AND projectIds = '{{ projectIds }}'
AND assetTypes = '{{ assetTypes }}'
AND dataProduct = '{{ dataProduct }}'
AND includeCascaded = '{{ includeCascaded }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
<TabItem value="get_rule">

Gets the details of a rule in Amazon DataZone. A rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards.

```sql
SELECT
name,
action,
createdAt,
createdBy,
description,
detail,
identifier,
lastUpdatedBy,
revision,
ruleType,
scope,
target,
targetType,
updatedAt
FROM aws.datazone.rules
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
AND revision = '{{ revision }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rule"
    values={[
        { label: 'create_rule', value: 'create_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rule">

Creates a rule in Amazon DataZone. A rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards.

```sql
INSERT INTO aws.datazone.rules (
name,
target,
action,
scope,
detail,
description,
clientToken,
domain_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ target }}' /* required */,
'{{ action }}' /* required */,
'{{ scope }}' /* required */,
'{{ detail }}' /* required */,
'{{ description }}',
'{{ clientToken }}',
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
name,
action,
createdAt,
createdBy,
description,
detail,
identifier,
ruleType,
scope,
target,
targetType
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rules
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the rules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rules resource.
    - name: name
      value: "{{ name }}"
    - name: target
      description: |
        The target of the rule.
      value:
        domainUnitTarget:
          domainUnitId: "{{ domainUnitId }}"
          includeChildDomainUnits: {{ includeChildDomainUnits }}
    - name: action
      value: "{{ action }}"
      valid_values: ['CREATE_LISTING_CHANGE_SET', 'CREATE_SUBSCRIPTION_REQUEST']
    - name: scope
      description: |
        The scope of a rule.
      value:
        assetType:
          selectionMode: "{{ selectionMode }}"
          specificAssetTypes:
            - "{{ specificAssetTypes }}"
        dataProduct: {{ dataProduct }}
        project:
          selectionMode: "{{ selectionMode }}"
          specificProjects:
            - "{{ specificProjects }}"
    - name: detail
      description: |
        The details of a rule.
      value:
        metadataFormEnforcementDetail:
          requiredMetadataForms:
            - typeIdentifier: "{{ typeIdentifier }}"
              typeRevision: "{{ typeRevision }}"
        glossaryTermEnforcementDetail:
          requiredGlossaryTermIds:
            - "{{ requiredGlossaryTermIds }}"
    - name: description
      value: "{{ description }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_rule"
    values={[
        { label: 'update_rule', value: 'update_rule' }
    ]}
>
<TabItem value="update_rule">

Updates a rule. In Amazon DataZone, a rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards.

```sql
UPDATE aws.datazone.rules
SET 
name = '{{ name }}',
description = '{{ description }}',
scope = '{{ scope }}',
detail = '{{ detail }}',
includeChildDomainUnits = {{ includeChildDomainUnits }}
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
name,
action,
createdAt,
createdBy,
description,
detail,
identifier,
lastUpdatedBy,
revision,
ruleType,
scope,
target,
updatedAt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rule"
    values={[
        { label: 'delete_rule', value: 'delete_rule' }
    ]}
>
<TabItem value="delete_rule">

Deletes a rule in Amazon DataZone. A rule is a formal agreement that enforces specific requirements across user workflows (e.g., publishing assets to the catalog, requesting subscriptions, creating projects) within the Amazon DataZone data portal. These rules help maintain consistency, ensure compliance, and uphold governance standards in data management processes. For instance, a metadata enforcement rule can specify the required information for creating a subscription request or publishing a data asset to the catalog, ensuring alignment with organizational standards.

```sql
DELETE FROM aws.datazone.rules
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
