--- 
title: profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - profiles
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

Creates, updates, deletes, gets or lists a <code>profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_profile"
    values={[
        { label: 'batch_get_profile', value: 'batch_get_profile' },
        { label: 'search_profiles', value: 'search_profiles' }
    ]}
>
<TabItem value="batch_get_profile">

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
    <td><CopyableCode code="Errors" /></td>
    <td><code>array</code></td>
    <td>For information about the errors that are common to all actions, see Common Errors.</td>
</tr>
<tr>
    <td><CopyableCode code="Profiles" /></td>
    <td><code>array</code></td>
    <td>Array of Profile Objects.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_profiles">

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
    <td><CopyableCode code="Items" /></td>
    <td><code>array</code></td>
    <td>The list of Profiles matching the search criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the previous SearchProfiles API call.</td>
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
    <td><a href="#batch_get_profile"><CopyableCode code="batch_get_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a batch of profiles.</td>
</tr>
<tr>
    <td><a href="#search_profiles"><CopyableCode code="search_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Searches for profiles within a specific domain using one or more predefined search keys (e.g., _fullName, _phone, _email, _account, etc.) and/or custom-defined search keys. A search key is a data type pair that consists of a KeyName and Values list. This operation supports searching for profiles with a minimum of 1 key-value(s) pair and up to 5 key-value(s) pairs using either AND or OR logic.</td>
</tr>
<tr>
    <td><a href="#create_profile"><CopyableCode code="create_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a standard profile. A standard profile represents the following attributes for a customer profile in a domain.</td>
</tr>
<tr>
    <td><a href="#add_profile_key"><CopyableCode code="add_profile_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProfileId"><code>ProfileId</code></a>, <a href="#parameter-KeyName"><code>KeyName</code></a></td>
    <td></td>
    <td>Associates a new key value with a specific profile, such as a Contact Record ContactId. A profile object can have a single unique key and any number of additional keys that can be used to identify the profile that it belongs to.</td>
</tr>
<tr>
    <td><a href="#update_profile"><CopyableCode code="update_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProfileId"><code>ProfileId</code></a></td>
    <td></td>
    <td>Updates the properties of a profile. The ProfileId is required for updating a customer profile. When calling the UpdateProfile API, specifying an empty string value means that any existing value will be removed. Not specifying a string value means that any value already there will be kept.</td>
</tr>
<tr>
    <td><a href="#delete_profile_key"><CopyableCode code="delete_profile_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a searchable key from a customer profile.</td>
</tr>
<tr>
    <td><a href="#delete_profile"><CopyableCode code="delete_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the standard customer profile and all data pertaining to the profile.</td>
</tr>
<tr>
    <td><a href="#merge_profiles"><CopyableCode code="merge_profiles" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MainProfileId"><code>MainProfileId</code></a>, <a href="#parameter-ProfileIdsToBeMerged"><code>ProfileIdsToBeMerged</code></a></td>
    <td></td>
    <td>Runs an AWS Lambda job that does the following: All the profileKeys in the ProfileToBeMerged will be moved to the main profile. All the objects in the ProfileToBeMerged will be moved to the main profile. All the ProfileToBeMerged will be deleted at the end. All the profileKeys in the ProfileIdsToBeMerged will be moved to the main profile. Standard fields are merged as follows: Fields are always "union"-ed if there are no conflicts in standard fields or attributeKeys. When there are conflicting fields: If no SourceProfileIds entry is specified, the main Profile value is always taken. If a SourceProfileIds entry is specified, the specified profileId is always taken, even if it is a NULL value. You can use MergeProfiles together with GetMatches, which returns potentially matching profiles, or use it with the results of another matching system. After profiles have been merged, they cannot be separated (unmerged).</td>
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
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of objects returned per page. The default is 20 if this parameter is not included in the request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the previous SearchProfiles API call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_profile"
    values={[
        { label: 'batch_get_profile', value: 'batch_get_profile' },
        { label: 'search_profiles', value: 'search_profiles' }
    ]}
>
<TabItem value="batch_get_profile">

Get a batch of profiles.

```sql
SELECT
Errors,
Profiles
FROM aws.customer_profiles.profiles
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_profiles">

Searches for profiles within a specific domain using one or more predefined search keys (e.g., _fullName, _phone, _email, _account, etc.) and/or custom-defined search keys. A search key is a data type pair that consists of a KeyName and Values list. This operation supports searching for profiles with a minimum of 1 key-value(s) pair and up to 5 key-value(s) pairs using either AND or OR logic.

```sql
SELECT
Items,
NextToken
FROM aws.customer_profiles.profiles
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_profile"
    values={[
        { label: 'create_profile', value: 'create_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_profile">

Creates a standard profile. A standard profile represents the following attributes for a customer profile in a domain.

```sql
INSERT INTO aws.customer_profiles.profiles (
AccountNumber,
AdditionalInformation,
PartyType,
BusinessName,
FirstName,
MiddleName,
LastName,
BirthDate,
Gender,
PhoneNumber,
MobilePhoneNumber,
HomePhoneNumber,
BusinessPhoneNumber,
EmailAddress,
PersonalEmailAddress,
BusinessEmailAddress,
Address,
ShippingAddress,
MailingAddress,
BillingAddress,
Attributes,
PartyTypeString,
GenderString,
ProfileType,
EngagementPreferences,
domain_name,
region
)
SELECT 
'{{ AccountNumber }}',
'{{ AdditionalInformation }}',
'{{ PartyType }}',
'{{ BusinessName }}',
'{{ FirstName }}',
'{{ MiddleName }}',
'{{ LastName }}',
'{{ BirthDate }}',
'{{ Gender }}',
'{{ PhoneNumber }}',
'{{ MobilePhoneNumber }}',
'{{ HomePhoneNumber }}',
'{{ BusinessPhoneNumber }}',
'{{ EmailAddress }}',
'{{ PersonalEmailAddress }}',
'{{ BusinessEmailAddress }}',
'{{ Address }}',
'{{ ShippingAddress }}',
'{{ MailingAddress }}',
'{{ BillingAddress }}',
'{{ Attributes }}',
'{{ PartyTypeString }}',
'{{ GenderString }}',
'{{ ProfileType }}',
'{{ EngagementPreferences }}',
'{{ domain_name }}',
'{{ region }}'
RETURNING
ProfileId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: profiles
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the profiles resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the profiles resource.
    - name: AccountNumber
      value: "{{ AccountNumber }}"
    - name: AdditionalInformation
      value: "{{ AdditionalInformation }}"
    - name: PartyType
      value: "{{ PartyType }}"
      valid_values: ['INDIVIDUAL', 'BUSINESS', 'OTHER']
    - name: BusinessName
      value: "{{ BusinessName }}"
    - name: FirstName
      value: "{{ FirstName }}"
    - name: MiddleName
      value: "{{ MiddleName }}"
    - name: LastName
      value: "{{ LastName }}"
    - name: BirthDate
      value: "{{ BirthDate }}"
    - name: Gender
      value: "{{ Gender }}"
      valid_values: ['MALE', 'FEMALE', 'UNSPECIFIED']
    - name: PhoneNumber
      value: "{{ PhoneNumber }}"
    - name: MobilePhoneNumber
      value: "{{ MobilePhoneNumber }}"
    - name: HomePhoneNumber
      value: "{{ HomePhoneNumber }}"
    - name: BusinessPhoneNumber
      value: "{{ BusinessPhoneNumber }}"
    - name: EmailAddress
      value: "{{ EmailAddress }}"
    - name: PersonalEmailAddress
      value: "{{ PersonalEmailAddress }}"
    - name: BusinessEmailAddress
      value: "{{ BusinessEmailAddress }}"
    - name: Address
      description: |
        A generic address associated with the customer that is not mailing, shipping, or billing.
      value:
        Address1: "{{ Address1 }}"
        Address2: "{{ Address2 }}"
        Address3: "{{ Address3 }}"
        Address4: "{{ Address4 }}"
        City: "{{ City }}"
        County: "{{ County }}"
        State: "{{ State }}"
        Province: "{{ Province }}"
        Country: "{{ Country }}"
        PostalCode: "{{ PostalCode }}"
    - name: ShippingAddress
      description: |
        A generic address associated with the customer that is not mailing, shipping, or billing.
      value:
        Address1: "{{ Address1 }}"
        Address2: "{{ Address2 }}"
        Address3: "{{ Address3 }}"
        Address4: "{{ Address4 }}"
        City: "{{ City }}"
        County: "{{ County }}"
        State: "{{ State }}"
        Province: "{{ Province }}"
        Country: "{{ Country }}"
        PostalCode: "{{ PostalCode }}"
    - name: MailingAddress
      description: |
        A generic address associated with the customer that is not mailing, shipping, or billing.
      value:
        Address1: "{{ Address1 }}"
        Address2: "{{ Address2 }}"
        Address3: "{{ Address3 }}"
        Address4: "{{ Address4 }}"
        City: "{{ City }}"
        County: "{{ County }}"
        State: "{{ State }}"
        Province: "{{ Province }}"
        Country: "{{ Country }}"
        PostalCode: "{{ PostalCode }}"
    - name: BillingAddress
      description: |
        A generic address associated with the customer that is not mailing, shipping, or billing.
      value:
        Address1: "{{ Address1 }}"
        Address2: "{{ Address2 }}"
        Address3: "{{ Address3 }}"
        Address4: "{{ Address4 }}"
        City: "{{ City }}"
        County: "{{ County }}"
        State: "{{ State }}"
        Province: "{{ Province }}"
        Country: "{{ Country }}"
        PostalCode: "{{ PostalCode }}"
    - name: Attributes
      value: "{{ Attributes }}"
    - name: PartyTypeString
      value: "{{ PartyTypeString }}"
    - name: GenderString
      value: "{{ GenderString }}"
    - name: ProfileType
      value: "{{ ProfileType }}"
      valid_values: ['ACCOUNT_PROFILE', 'PROFILE']
    - name: EngagementPreferences
      description: |
        Object that defines users preferred methods of engagement.
      value:
        Phone:
          - KeyName: "{{ KeyName }}"
            KeyValue: "{{ KeyValue }}"
            ProfileId: "{{ ProfileId }}"
            ContactType: "{{ ContactType }}"
        Email:
          - KeyName: "{{ KeyName }}"
            KeyValue: "{{ KeyValue }}"
            ProfileId: "{{ ProfileId }}"
            ContactType: "{{ ContactType }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_profile_key"
    values={[
        { label: 'add_profile_key', value: 'add_profile_key' },
        { label: 'update_profile', value: 'update_profile' }
    ]}
>
<TabItem value="add_profile_key">

Associates a new key value with a specific profile, such as a Contact Record ContactId. A profile object can have a single unique key and any number of additional keys that can be used to identify the profile that it belongs to.

```sql
UPDATE aws.customer_profiles.profiles
SET 
ProfileId = '{{ ProfileId }}',
KeyName = '{{ KeyName }}',
Values = '{{ Values }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
AND ProfileId = '{{ ProfileId }}' --required
AND KeyName = '{{ KeyName }}' --required
RETURNING
KeyName,
Values;
```
</TabItem>
<TabItem value="update_profile">

Updates the properties of a profile. The ProfileId is required for updating a customer profile. When calling the UpdateProfile API, specifying an empty string value means that any existing value will be removed. Not specifying a string value means that any value already there will be kept.

```sql
UPDATE aws.customer_profiles.profiles
SET 
ProfileId = '{{ ProfileId }}',
AdditionalInformation = '{{ AdditionalInformation }}',
AccountNumber = '{{ AccountNumber }}',
PartyType = '{{ PartyType }}',
BusinessName = '{{ BusinessName }}',
FirstName = '{{ FirstName }}',
MiddleName = '{{ MiddleName }}',
LastName = '{{ LastName }}',
BirthDate = '{{ BirthDate }}',
Gender = '{{ Gender }}',
PhoneNumber = '{{ PhoneNumber }}',
MobilePhoneNumber = '{{ MobilePhoneNumber }}',
HomePhoneNumber = '{{ HomePhoneNumber }}',
BusinessPhoneNumber = '{{ BusinessPhoneNumber }}',
EmailAddress = '{{ EmailAddress }}',
PersonalEmailAddress = '{{ PersonalEmailAddress }}',
BusinessEmailAddress = '{{ BusinessEmailAddress }}',
Address = '{{ Address }}',
ShippingAddress = '{{ ShippingAddress }}',
MailingAddress = '{{ MailingAddress }}',
BillingAddress = '{{ BillingAddress }}',
Attributes = '{{ Attributes }}',
PartyTypeString = '{{ PartyTypeString }}',
GenderString = '{{ GenderString }}',
ProfileType = '{{ ProfileType }}',
EngagementPreferences = '{{ EngagementPreferences }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
AND ProfileId = '{{ ProfileId }}' --required
RETURNING
ProfileId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_profile_key"
    values={[
        { label: 'delete_profile_key', value: 'delete_profile_key' },
        { label: 'delete_profile', value: 'delete_profile' }
    ]}
>
<TabItem value="delete_profile_key">

Removes a searchable key from a customer profile.

```sql
DELETE FROM aws.customer_profiles.profiles
WHERE domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_profile">

Deletes the standard customer profile and all data pertaining to the profile.

```sql
DELETE FROM aws.customer_profiles.profiles
WHERE domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="merge_profiles"
    values={[
        { label: 'merge_profiles', value: 'merge_profiles' }
    ]}
>
<TabItem value="merge_profiles">

Runs an AWS Lambda job that does the following: All the profileKeys in the ProfileToBeMerged will be moved to the main profile. All the objects in the ProfileToBeMerged will be moved to the main profile. All the ProfileToBeMerged will be deleted at the end. All the profileKeys in the ProfileIdsToBeMerged will be moved to the main profile. Standard fields are merged as follows: Fields are always "union"-ed if there are no conflicts in standard fields or attributeKeys. When there are conflicting fields: If no SourceProfileIds entry is specified, the main Profile value is always taken. If a SourceProfileIds entry is specified, the specified profileId is always taken, even if it is a NULL value. You can use MergeProfiles together with GetMatches, which returns potentially matching profiles, or use it with the results of another matching system. After profiles have been merged, they cannot be separated (unmerged).

```sql
EXEC aws.customer_profiles.profiles.merge_profiles 
@domain_name='{{ domain_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"MainProfileId": "{{ MainProfileId }}", 
"ProfileIdsToBeMerged": "{{ ProfileIdsToBeMerged }}", 
"FieldSourceProfileIds": "{{ FieldSourceProfileIds }}"
}'
;
```
</TabItem>
</Tabs>
