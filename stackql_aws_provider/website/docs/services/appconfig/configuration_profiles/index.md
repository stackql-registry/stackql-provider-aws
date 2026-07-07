--- 
title: configuration_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_profiles
  - appconfig
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

Creates, updates, deletes, gets or lists a <code>configuration_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appconfig.configuration_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configuration_profile"
    values={[
        { label: 'get_configuration_profile', value: 'get_configuration_profile' },
        { label: 'list_configuration_profiles', value: 'list_configuration_profiles' }
    ]}
>
<TabItem value="get_configuration_profile">

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
    <td><CopyableCode code="ApplicationId" /></td>
    <td><code>string</code></td>
    <td>The application ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The configuration profile description.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The configuration profile ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name of the Key Management Service key to encrypt new configuration data versions in the AppConfig hosted configuration store. This attribute is only used for hosted configuration types. To encrypt data managed in other configuration stores, see the documentation for how to specify an KMS key for that particular service. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:&#91;a-z&#93;+:((eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:&#91;a-zA-Z0-9-_/:.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyIdentifier" /></td>
    <td><code>string</code></td>
    <td>The Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.</td>
</tr>
<tr>
    <td><CopyableCode code="LocationUri" /></td>
    <td><code>string</code></td>
    <td>The URI location of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration profile.</td>
</tr>
<tr>
    <td><CopyableCode code="RetrievalRoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of an IAM role with permission to access the configuration at the specified LocationUri. (pattern: &lt;code&gt;^((arn):(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov|aws-eusc):(iam)::\d&#123;12&#125;:role&#91;/&#93;.*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of configurations contained in the profile. AppConfig supports feature flags and freeform configurations. We recommend you create feature flag configurations to enable or disable new features and freeform configurations to distribute configurations to an application. When calling this API, enter one of the following values for Type: AWS.AppConfig.FeatureFlags AWS.Freeform (pattern: &lt;code&gt;^&#91;a-zA-Z\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Validators" /></td>
    <td><code>array</code></td>
    <td>A list of methods for validating the configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configuration_profiles">

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
    <td><CopyableCode code="ApplicationId" /></td>
    <td><code>string</code></td>
    <td>The application ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the configuration profile. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LocationUri" /></td>
    <td><code>string</code></td>
    <td>The URI location of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of configurations contained in the profile. AppConfig supports feature flags and freeform configurations. We recommend you create feature flag configurations to enable or disable new features and freeform configurations to distribute configurations to an application. When calling this API, enter one of the following values for Type: AWS.AppConfig.FeatureFlags AWS.Freeform (pattern: &lt;code&gt;^&#91;a-zA-Z\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ValidatorTypes" /></td>
    <td><code>array</code></td>
    <td>The types of validators in the configuration profile.</td>
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
    <td><a href="#get_configuration_profile"><CopyableCode code="get_configuration_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-configuration_profile_id"><code>configuration_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a configuration profile.</td>
</tr>
<tr>
    <td><a href="#list_configuration_profiles"><CopyableCode code="list_configuration_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-next_token"><code>next_token</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>Lists the configuration profiles for an application.</td>
</tr>
<tr>
    <td><a href="#create_configuration_profile"><CopyableCode code="create_configuration_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LocationUri"><code>LocationUri</code></a></td>
    <td></td>
    <td>Creates a configuration profile, which is information that enables AppConfig to access the configuration source. Valid configuration sources include the following: Configuration data in YAML, JSON, and other formats stored in the AppConfig hosted configuration store Configuration data stored as objects in an Amazon Simple Storage Service (Amazon S3) bucket Pipelines stored in CodePipeline Secrets stored in Secrets Manager Standard and secure string parameters stored in Amazon Web Services Systems Manager Parameter Store Configuration data in SSM documents stored in the Systems Manager document store A configuration profile includes the following information: The URI location of the configuration data. The Identity and Access Management (IAM) role that provides access to the configuration data. A validator for the configuration data. Available validators include either a JSON Schema or an Amazon Web Services Lambda function. For more information, see Create a Configuration and a Configuration Profile in the AppConfig User Guide.</td>
</tr>
<tr>
    <td><a href="#update_configuration_profile"><CopyableCode code="update_configuration_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-configuration_profile_id"><code>configuration_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a configuration profile.</td>
</tr>
<tr>
    <td><a href="#delete_configuration_profile"><CopyableCode code="delete_configuration_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-configuration_profile_id"><code>configuration_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amzn-deletion-protection-check"><code>x-amzn-deletion-protection-check</code></a></td>
    <td>Deletes a configuration profile. To prevent users from unintentionally deleting actively-used configuration profiles, enable deletion protection.</td>
</tr>
<tr>
    <td><a href="#validate_configuration"><CopyableCode code="validate_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-configuration_profile_id"><code>configuration_profile_id</code></a>, <a href="#parameter-configuration_version"><code>configuration_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Uses the validators in a configuration profile to validate a configuration.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The application ID.</td>
</tr>
<tr id="parameter-configuration_profile_id">
    <td><CopyableCode code="configuration_profile_id" /></td>
    <td><code>string</code></td>
    <td>The configuration profile ID.</td>
</tr>
<tr id="parameter-configuration_version">
    <td><CopyableCode code="configuration_version" /></td>
    <td><code>string</code></td>
    <td>The version of the configuration to validate.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max_results">
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.</td>
</tr>
<tr id="parameter-next_token">
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token to start the list. Use this token to get the next set of results.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A filter based on the type of configurations that the configuration profile contains. A configuration can be a feature flag or a freeform configuration.</td>
</tr>
<tr id="parameter-x-amzn-deletion-protection-check">
    <td><CopyableCode code="x-amzn-deletion-protection-check" /></td>
    <td><code>string</code></td>
    <td>A parameter to configure deletion protection. Deletion protection prevents a user from deleting a configuration profile if your application has called either GetLatestConfiguration or for the configuration profile during the specified interval. This parameter supports the following values: BYPASS: Instructs AppConfig to bypass the deletion protection check and delete a configuration profile even if deletion protection would have otherwise prevented it. APPLY: Instructs the deletion protection check to run, even if deletion protection is disabled at the account level. APPLY also forces the deletion protection check to run against resources created in the past hour, which are normally excluded from deletion protection checks. ACCOUNT_DEFAULT: The default setting, which instructs AppConfig to implement the deletion protection value specified in the UpdateAccountSettings API.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_configuration_profile"
    values={[
        { label: 'get_configuration_profile', value: 'get_configuration_profile' },
        { label: 'list_configuration_profiles', value: 'list_configuration_profiles' }
    ]}
>
<TabItem value="get_configuration_profile">

Retrieves information about a configuration profile.

```sql
SELECT
ApplicationId,
Description,
Id,
KmsKeyArn,
KmsKeyIdentifier,
LocationUri,
Name,
RetrievalRoleArn,
Type,
Validators
FROM aws.appconfig.configuration_profiles
WHERE application_id = '{{ application_id }}' -- required
AND configuration_profile_id = '{{ configuration_profile_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configuration_profiles">

Lists the configuration profiles for an application.

```sql
SELECT
ApplicationId,
Id,
LocationUri,
Name,
Type,
ValidatorTypes
FROM aws.appconfig.configuration_profiles
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND next_token = '{{ next_token }}'
AND type = '{{ type }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_configuration_profile"
    values={[
        { label: 'create_configuration_profile', value: 'create_configuration_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_configuration_profile">

Creates a configuration profile, which is information that enables AppConfig to access the configuration source. Valid configuration sources include the following: Configuration data in YAML, JSON, and other formats stored in the AppConfig hosted configuration store Configuration data stored as objects in an Amazon Simple Storage Service (Amazon S3) bucket Pipelines stored in CodePipeline Secrets stored in Secrets Manager Standard and secure string parameters stored in Amazon Web Services Systems Manager Parameter Store Configuration data in SSM documents stored in the Systems Manager document store A configuration profile includes the following information: The URI location of the configuration data. The Identity and Access Management (IAM) role that provides access to the configuration data. A validator for the configuration data. Available validators include either a JSON Schema or an Amazon Web Services Lambda function. For more information, see Create a Configuration and a Configuration Profile in the AppConfig User Guide.

```sql
INSERT INTO aws.appconfig.configuration_profiles (
Name,
Description,
LocationUri,
RetrievalRoleArn,
Validators,
Tags,
Type,
KmsKeyIdentifier,
application_id,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ LocationUri }}' /* required */,
'{{ RetrievalRoleArn }}',
'{{ Validators }}',
'{{ Tags }}',
'{{ Type }}',
'{{ KmsKeyIdentifier }}',
'{{ application_id }}',
'{{ region }}'
RETURNING
ApplicationId,
Description,
Id,
KmsKeyArn,
KmsKeyIdentifier,
LocationUri,
Name,
RetrievalRoleArn,
Type,
Validators
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configuration_profiles
  props:
    - name: application_id
      value: "{{ application_id }}"
      description: Required parameter for the configuration_profiles resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configuration_profiles resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: LocationUri
      value: "{{ LocationUri }}"
    - name: RetrievalRoleArn
      value: "{{ RetrievalRoleArn }}"
    - name: Validators
      value:
        - Type: "{{ Type }}"
          Content: "{{ Content }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: Type
      value: "{{ Type }}"
    - name: KmsKeyIdentifier
      value: "{{ KmsKeyIdentifier }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_configuration_profile"
    values={[
        { label: 'update_configuration_profile', value: 'update_configuration_profile' }
    ]}
>
<TabItem value="update_configuration_profile">

Updates a configuration profile.

```sql
UPDATE aws.appconfig.configuration_profiles
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
RetrievalRoleArn = '{{ RetrievalRoleArn }}',
Validators = '{{ Validators }}',
KmsKeyIdentifier = '{{ KmsKeyIdentifier }}'
WHERE 
application_id = '{{ application_id }}' --required
AND configuration_profile_id = '{{ configuration_profile_id }}' --required
AND region = '{{ region }}' --required
RETURNING
ApplicationId,
Description,
Id,
KmsKeyArn,
KmsKeyIdentifier,
LocationUri,
Name,
RetrievalRoleArn,
Type,
Validators;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configuration_profile"
    values={[
        { label: 'delete_configuration_profile', value: 'delete_configuration_profile' }
    ]}
>
<TabItem value="delete_configuration_profile">

Deletes a configuration profile. To prevent users from unintentionally deleting actively-used configuration profiles, enable deletion protection.

```sql
DELETE FROM aws.appconfig.configuration_profiles
WHERE application_id = '{{ application_id }}' --required
AND configuration_profile_id = '{{ configuration_profile_id }}' --required
AND region = '{{ region }}' --required
AND `x-amzn-deletion-protection-check` = '{{ x-amzn-deletion-protection-check }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="validate_configuration"
    values={[
        { label: 'validate_configuration', value: 'validate_configuration' }
    ]}
>
<TabItem value="validate_configuration">

Uses the validators in a configuration profile to validate a configuration.

```sql
EXEC aws.appconfig.configuration_profiles.validate_configuration 
@application_id='{{ application_id }}' --required, 
@configuration_profile_id='{{ configuration_profile_id }}' --required, 
@configuration_version='{{ configuration_version }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
